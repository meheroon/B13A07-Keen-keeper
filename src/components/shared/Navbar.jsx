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
      <div className="container-width">
        <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
          <Link
            href="/"
            className="shrink-0 text-[20px] font-extrabold text-slate-800 sm:text-2xl"
          >
            KeenKeeper
          </Link>

          <nav className="min-w-0 overflow-x-auto">
            <div className="flex items-center gap-1 sm:gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-2 text-xs font-semibold transition sm:gap-2 sm:px-4 sm:py-3 sm:text-sm',
                      active
                        ? 'bg-[#255845] text-white'
                        : 'text-slate-500 hover:text-slate-800'
                    )}
                  >
                    <Icon className="text-[11px] sm:text-sm" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}