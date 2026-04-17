'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartPie, FaClockRotateLeft, FaHouse } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: FaHouse },
  { href: '/timeline', label: 'Timeline', icon: FaClockRotateLeft },
  { href: '/stats', label: 'Stats', icon: FaChartPie }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <div className="container-width flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 ring-1 ring-violet-200">
            <Image src="/logo.png" alt="KeenKeeper logo" width={34} height={34} />
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-900">KeenKeeper</p>
            <p className="text-xs text-slate-500">Keep your friendships alive</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-all sm:px-4',
                  isActive
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                )}
              >
                <Icon className="text-sm" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
