import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#255845] text-white">
      <div className="container-width py-20 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">KeenKeeper</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base text-white/80">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="mt-10 text-2xl font-semibold sm:text-3xl">Social Links</h3>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#255845]">
            <FaInstagram />
          </a>
          <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#255845]">
            <FaFacebookF />
          </a>
          <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#255845]">
            <FaXTwitter />
          </a>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}