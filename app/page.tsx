import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChartNoAxesCombined, ChartPie, MousePointer2, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Meta Campaigns', value: 'Strategy-first' },
  { label: 'Business Focus', value: 'E-commerce, Real Estate, Service' },
  { label: 'Approach', value: 'Creative + Data' },
];

const serviceHighlights = [
  'Facebook Advertising',
  'Instagram Advertising',
  'WhatsApp Advertising',
  'Ad Creative Strategy',
  'Audience Retargeting',
];

function HeroVisual() {
  return (
    <div className="hero-scene relative mx-auto w-full max-w-[620px]">
      <div className="orb orb-orange" />
      <div className="orb orb-blue" />

      <motion.div
        className="floating-card dashboard-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Campaign</p>
            <h3 className="mt-1 text-xl font-black text-brand-navy">Growth Dashboard</h3>
          </div>
          <div className="rounded-full bg-brand-orange/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
            Live
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-brand-grey p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">CTR</p>
            <p className="mt-2 text-xl font-black text-brand-navy">4.8%</p>
          </div>
          <div className="rounded-2xl bg-brand-grey p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">ROAS</p>
            <p className="mt-2 text-xl font-black text-brand-navy">3.1x</p>
          </div>
          <div className="rounded-2xl bg-brand-grey p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Leads</p>
            <p className="mt-2 text-xl font-black text-brand-navy">128</p>
          </div>
        </div>
        <div className="mt-5 h-28 rounded-2xl bg-gradient-to-br from-brand-navy via-brand-navy to-[#224a70] p-3">
          <div className="flex h-full items-end gap-2">
            {[35, 55, 45, 70, 60, 88, 96].map((height, idx) => (
              <div key={idx} className="flex-1 rounded-t-xl bg-gradient-to-t from-brand-orange to-[#ffb78e]" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="floating-card campaign-card"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <span>Audience</span>
          <span className="text-brand-orange">84%</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Ecommerce', 'Real Estate', 'Service', 'Retargeting'].map((tag) => (
            <span key={tag} className="rounded-full border border-brand-navy/10 bg-white px-3 py-1 text-xs font-semibold text-brand-navy">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="floating-card creative-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-orange text-white">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Creative</p>
            <h4 className="text-base font-black text-brand-navy">Campaign Story</h4>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-2/3 rounded-full bg-brand-orange/90" />
          <div className="h-2 w-5/6 rounded-full bg-slate-200" />
          <div className="h-2 w-1/2 rounded-full bg-slate-200" />
        </div>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-grey px-4 pb-24 pt-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-navy shadow-sm">
                <MousePointer2 size={14} className="text-brand-orange" />
                Meta advertising that moves business forward
              </div>

              <h1 className="mt-8 max-w-[600px] text-5xl font-black leading-[0.92] text-brand-navy sm:text-6xl lg:text-[5.1rem]">
                MAKE EVERY AD COUNT.
              </h1>

              <p className="mt-6 max-w-[590px] text-xl font-semibold text-brand-navy/80">
                Helping Businesses Grow Through Strategic Meta Advertising.
              </p>

              <p className="mt-6 max-w-[600px] text-lg leading-8 text-brand-navy/70">
                We help E-commerce, Real Estate and Service Businesses connect with the right audience through strategic Facebook, Instagram and WhatsApp advertising.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#e5531d]"
                >
                  LET&apos;S WORK TOGETHER
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-brand-navy/20 bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-navy transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
                >
                  EXPLORE OUR SERVICES
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white p-4 shadow-soft">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-base font-bold text-brand-navy">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-soft md:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Who we help</p>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">Built for modern businesses with growth goals.</h2>
              <div className="mt-8 space-y-4 text-base leading-7 text-white/80">
                <p>We work with E-commerce businesses, online stores, real estate brands and service-based companies that want smarter, more targeted advertising.</p>
                <p>Our work focuses on building clear customer journeys, sharper creative messaging and efficient campaign delivery across Meta channels.</p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {serviceHighlights.map((item, idx) => (
                <motion.div
                  key={item}
                  className="group rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                    {idx % 2 === 0 ? <ChartPie size={22} /> : <ChartNoAxesCombined size={22} />}
                  </div>
                  <h3 className="text-xl font-black text-brand-navy">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-navy/70">
                    Purposeful advertising systems designed around your audience, brand and growth objectives.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-grey px-4 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Why AdCraft</p>
            <h2 className="mt-4 text-3xl font-black text-brand-navy md:text-5xl">Advertising with a clearer purpose.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              'Strategic Thinking',
              'Audience-Focused Advertising',
              'Creative Campaign Planning',
              'Data-Informed Optimization',
              'Business-Focused Approach',
            ].map((item, idx) => (
              <motion.div
                key={item}
                className="rounded-[1.75rem] bg-white p-6 shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-lg font-black text-brand-orange">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-black text-brand-navy">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
