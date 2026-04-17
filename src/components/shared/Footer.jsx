import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/70 bg-slate-950 text-slate-200">
      <div className="container-width grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2">
              <Image src="/logo.png" alt="KeenKeeper logo" width={30} height={30} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">KeenKeeper</h3>
              <p className="text-sm text-slate-400">A simple way to protect meaningful friendships.</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Track your conversations, stay consistent with check-ins, and make sure the people that matter most never drift too far away.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
          <div className="space-y-3 text-sm text-slate-400">
            <Link href="/" className="block hover:text-white">Home</Link>
            <Link href="/timeline" className="block hover:text-white">Timeline</Link>
            <Link href="/stats" className="block hover:text-white">Stats</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Stay Connected</h4>
          <p className="mb-4 text-sm text-slate-400">Make every reminder feel more human and intentional.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-violet-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-violet-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-violet-400 hover:text-white"><FaXTwitter /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2026 KeenKeeper. All rights reserved.
      </div>
    </footer>
  );
}
