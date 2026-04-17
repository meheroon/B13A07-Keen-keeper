'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHouse, FaChartLine } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: FaHouse },
  { href: '/timeline', label: 'Timeline', icon: FiClock },
  { href: '/stats', label: 'Stats', icon: FaChartLine }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container-width flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-slate-800">
          KeenKeeper
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition',
                  active
                    ? 'bg-[#255845] text-white'
                    : 'text-slate-500 hover:text-slate-800'
                )}
              >
                <Icon className="text-sm" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}