import {
  FaCode, FaServer, FaBrain, FaLanguage, FaGlobe, FaStarAndCrescent, FaSquareRootVariable, FaLaptopCode,
  FaChalkboardUser, FaBriefcase, FaAward, FaWifi, FaWallet, FaLocationDot, FaPhone, FaEnvelope, FaClock,
  FaTelegram, FaInstagram, FaYoutube, FaFacebookF, FaReact, FaPython, FaNodeJs, FaJs, FaBookOpen, FaRocket,
  FaGears, FaUserGraduate, FaCalendarCheck, FaSackDollar, FaTrophy, FaGraduationCap, FaHandshake, FaBullhorn,
  FaCertificate, FaBuilding, FaPuzzlePiece, FaCheck, FaPlus, FaMoon, FaSun, FaArrowRight, FaXmark, FaPlay,
  FaBars, FaFileSignature, FaUsers, FaQuoteLeft, FaCircleCheck, FaArrowLeft, FaStar,
} from 'react-icons/fa6';

const map = {
  code: FaCode, server: FaServer, brain: FaBrain, language: FaLanguage, globe: FaGlobe, crescent: FaStarAndCrescent,
  math: FaSquareRootVariable, laptop: FaLaptopCode, mentor: FaChalkboardUser, briefcase: FaBriefcase, award: FaAward,
  wifi: FaWifi, wallet: FaWallet, pin: FaLocationDot, phone: FaPhone, mail: FaEnvelope, clock: FaClock,
  telegram: FaTelegram, instagram: FaInstagram, youtube: FaYoutube, facebook: FaFacebookF, react: FaReact,
  python: FaPython, node: FaNodeJs, js: FaJs, book: FaBookOpen, rocket: FaRocket, gears: FaGears,
  student: FaUserGraduate, calendar: FaCalendarCheck, money: FaSackDollar, trophy: FaTrophy, grad: FaGraduationCap,
  handshake: FaHandshake, bullhorn: FaBullhorn, cert: FaCertificate, building: FaBuilding, puzzle: FaPuzzlePiece,
  check: FaCheck, plus: FaPlus, moon: FaMoon, sun: FaSun, arrow: FaArrowRight, back: FaArrowLeft, close: FaXmark,
  play: FaPlay, menu: FaBars, form: FaFileSignature, users: FaUsers, quote: FaQuoteLeft, ok: FaCircleCheck, star: FaStar,
} as const;

export type IconKey = keyof typeof map;

export default function Icon({ name, className }: { name: IconKey; className?: string }) {
  const C = map[name];
  return <C className={className} aria-hidden />;
}
