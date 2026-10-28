import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import type { ApplicationInput, ApplicationRecord } from './schema';

const file = path.join(process.cwd(), 'data', 'applications.json');
let chain: Promise<unknown> = Promise.resolve();

export async function listApplications(): Promise<ApplicationRecord[]> {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8')) as ApplicationRecord[];
  } catch {
    return [];
  }
}

// Yozuvlar ketma-ket bajariladi (bir vaqtda yozishda fayl buzilmasligi uchun)
export function addApplication(input: ApplicationInput): Promise<ApplicationRecord> {
  const run = chain.then(async () => {
    const list = await listApplications();
    const record: ApplicationRecord = { id: randomUUID(), createdAt: new Date().toISOString(), ...input };
    list.push(record);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify(list, null, 2));
    return record;
  });
  chain = run.catch(() => undefined);
  return run;
}
