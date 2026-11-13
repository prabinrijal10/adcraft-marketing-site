import Link from 'next/link';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LogoMark } from '@/components/logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Approach', href: '/approach' },
  { label: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-10">
        <Link href="/" aria-label="AdCraft Marketing home" className="flex items-center">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-bold uppercase tracking-[0.18em] transition ${pathname === item.href ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://www.facebook.com/profile.php?id=61594861956157&mibextid=wwXIfr&rdid=CRIlHSKQHdDr4QzS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19c4WY93Yi%2F%3Fmibextid=wwXIfr%23" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy transition hover:border-brand-orange hover:text-brand-orange">
            <Facebook size={16} />
          </a>
          <a href="https://www.instagram.com/adcraft.np?stkn=MWNtbTQxMWFvMWplNQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy transition hover:border-brand-orange hover:text-brand-orange">
            <Instagram size={16} />
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-[#e5531d]">
            LET&apos;S WORK TOGETHER
          </Link>
        </div>

        <button type="button" aria-label="Open menu" className="rounded-full border border-brand-navy/15 p-2 lg:hidden" onClick={() => setMobileOpen((prev) => !prev)}>
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-brand-navy/10 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm font-bold uppercase tracking-[0.18em] ${pathname === item.href ? 'text-brand-orange' : 'text-brand-navy'}`}>
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61594861956157&mibextid=wwXIfr&rdid=CRIlHSKQHdDr4QzS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19c4WY93Yi%2F%3Fmibextid=wwXIfr%23" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/adcraft.np?stkn=MWNtbTQxMWFvMWplNQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy">
                <Instagram size={16} />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
