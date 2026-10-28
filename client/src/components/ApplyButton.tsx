'use client';

import { useApply } from './ApplyModal';

export default function ApplyButton({ children, course, branch, className = 'btn btn-primary' }: { children: React.ReactNode; course?: string; branch?: string; className?: string }) {
  const { open } = useApply();
  return (
    <button type="button" className={className} onClick={() => open({ course, branch })}>
      {children}
    </button>
  );
}
