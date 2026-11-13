'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

const businessOptions = ['E-commerce', 'Real Estate', 'Service Business', 'Other'];
const serviceOptions = [
  'Meta Ads Management',
  'Content Strategy',
  'Audience Targeting & Retargeting',
  'Ad Creative Strategy',
  'Campaign Optimization',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessCategory: '',
    services: '',
    message: '',
    website: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) {
      setError('Spam protection blocked this message.');
      return;
    }

    if (!form.fullName || !form.email || !form.phone || !form.businessCategory || !form.services || !form.message) {
      setError('Please fill in all required fields.');
      setSuccess('');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailValid) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Thank you. Your message has been sent successfully.');
    setForm({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      businessCategory: '',
      services: '',
      message: '',
      website: '',
    });
  };

  const whatsappHref = 'https://wa.me/9779700517711?text=' + encodeURIComponent("Hello AdCraft Marketing! I'm interested in your advertising services. I'd like to discuss my business requirements.");

  return (
    <section className="px-4 pb-24 pt-16 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Contact us</p>
          <h1 className="mt-4 text-4xl font-black text-brand-navy md:text-6xl">LET&apos;S TALK ABOUT YOUR BUSINESS GROWTH.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-brand-navy/70">
            Have a business you&apos;d like to grow through advertising? Let&apos;s discuss your goals and explore how AdCraft Marketing can help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-[2rem] bg-brand-navy p-8 text-white shadow-soft md:p-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-orange">Contact details</p>
              <h2 className="mt-3 text-3xl font-black">Get in touch</h2>
            </div>

            <div className="space-y-4 text-base text-white/85">
              <div className="flex items-center gap-3"><Phone size={18} className="text-brand-orange" /><span>9700517711</span></div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-brand-orange" /><a href="mailto:adcraft.np@gmail.com" className="underline underline-offset-4">adcraft.np@gmail.com</a></div>
              <div className="flex items-center gap-3"><MessageCircle size={18} className="text-brand-orange" /><span>9700517711</span></div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-brand-orange" /><a href="https://www.instagram.com/adcraft.np" target="_blank" rel="noreferrer" className="underline underline-offset-4">@adcraft.np</a></div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a href="https://wa.me/9779700517711?text=Hello%20AdCraft%20Marketing!%20I'm%20interested%20in%20your%20advertising%20services.%20I'd%20like%20to%20discuss%20my%20business%20requirements." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#e5531d]">
                WhatsApp now
              </a>
              <a href="https://www.facebook.com/profile.php?id=61594861956157&mibextid=wwXIfr&rdid=CRIlHSKQHdDr4QzS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19c4WY93Yi%2F%3Fmibextid=wwXIfr%23" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
                Facebook
              </a>
              <a href="https://www.instagram.com/adcraft.np?stkn=MWNtbTQxMWFvMWplNQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:col-span-2">
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-brand-grey p-6 shadow-card md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-semibold text-brand-navy">
                  Full Name
                  <input name="fullName" value={form.fullName} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-orange" placeholder="Enter your full name" />
                </label>

                <label className="block text-sm font-semibold text-brand-navy">
                  Business Name
                  <input name="businessName" value={form.businessName} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-orange" placeholder="Business name" />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-semibold text-brand-navy">
                  Email Address
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-orange" placeholder="you@example.com" />
                </label>

                <label className="block text-sm font-semibold text-brand-navy">
                  Phone Number
                  <input name="phone" value={form.phone} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-orange" placeholder="9700517711" />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-semibold text-brand-navy">
                  Business Category
                  <select name="businessCategory" value={form.businessCategory} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-orange">
                    <option value="">Select category</option>
                    {businessOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-semibold text-brand-navy">
                  Interested Service
                  <select name="services" value={form.services} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-orange">
                    <option value="">Select service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="hidden">
                <input name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>

              <label className="block text-sm font-semibold text-brand-navy">
                Message
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-orange" placeholder="Tell us about your business goals and requirements" />
              </label>

              {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div> : null}
              {success ? <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700"><CheckCircle2 size={16} /> {success}</div> : null}

              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-[#e5531d]">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
