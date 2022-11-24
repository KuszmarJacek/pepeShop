import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a className="flex items-center space-x-2">
      <Image src="/frog.svg" alt="Logo" width={64} height={64} />
      <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">
        Rarest of pepes
      </span>
    </a>
  </Link>
);

export default Logo;
