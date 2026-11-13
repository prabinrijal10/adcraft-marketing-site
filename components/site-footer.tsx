import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, Send } from 'lucide-react';
import { LogoMark } from '@/components/logo';

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <LogoMark darkMode />
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">Strategic Advertising. Creative Thinking. Measurable Growth.</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">AdCraft Marketing helps businesses grow through strategic Meta advertising built for E-commerce, Real Estate and Service-focused brands.</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Quick links</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/approach">Our Approach</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Core services</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>Meta Ads Management</li>
              <li>Content Strategy</li>
              <li>Audience Targeting & Retargeting</li>
              <li>Ad Creative Strategy</li>
              <li>Campaign Optimization</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone size={14} className="text-brand-orange" /> 9700517711</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-brand-orange" /> <a href="mailto:adcraft.np@gmail.com" className="underline">adcraft.np@gmail.com</a></li>
              <li className="flex items-center gap-2"><Send size={14} className="text-brand-orange" /> <a href="https://wa.me/9779700517711?text=Hello%20AdCraft%20Marketing!%20I'm%20interested%20in%20your%20advertising%20services.%20I'd%20like%20to%20discuss%20my%20business%20requirements." target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li className="flex items-center gap-2"><Facebook size={14} className="text-brand-orange" /> <a href="https://www.facebook.com/profile.php?id=61594861956157&mibextid=wwXIfr&rdid=CRIlHSKQHdDr4QzS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19c4WY93Yi%2F%3Fmibextid=wwXIfr%23" target="_blank" rel="noreferrer">Facebook</a></li>
              <li className="flex items-center gap-2"><Instagram size={14} className="text-brand-orange" /> <a href="https://www.instagram.com/adcraft.np?stkn=MWNtbTQxMWFvMWplNQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/70">
          © 2026 AdCraft Marketing. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
