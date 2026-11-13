import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, ChartColumnBig, Lightbulb, Megaphone, Target } from 'lucide-react';

const focusAreas = [
  'Facebook Advertising',
  'Instagram Advertising',
  'WhatsApp Advertising',
  'Advertising Strategy',
  'Campaign Optimization',
];

const values = [
  {
    icon: <Megaphone size={20} />,
    title: 'Strategic Thinking',
    text: 'We focus on what your business needs, how your audience behaves and what actions drive value.',
  },
  {
    icon: <Target size={20} />,
    title: 'Audience-Focused Advertising',
    text: 'Every campaign is shaped around the right people, the right offer and the right message.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Creative Campaign Planning',
    text: 'We develop concepts that connect with attention, build clarity and encourage action.',
  },
  {
    icon: <ChartColumnBig size={20} />,
    title: 'Data-Informed Optimization',
    text: 'We monitor performance, test direction and refine campaigns based on what the data shows.',
  },
  {
    icon: <BadgeCheck size={20} />,
    title: 'Business-Focused Approach',
    text: 'Our strategy supports your business goals rather than vanity metrics alone.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-20 pt-16 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">About us</p>
            <h1 className="mt-5 text-4xl font-black text-brand-navy md:text-6xl">ABOUT ADCRAFT MARKETING</h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-brand-navy md:text-5xl">WE BELIEVE EVERY BUSINESS DESERVES SMARTER ADVERTISING.</h2>
              <p className="mt-6 text-lg leading-8 text-brand-navy/70">
                AdCraft Marketing is a specialized advertising agency focused on helping businesses grow through strategic Meta advertising. We combine creative thinking, audience insights and campaign optimization to help brands connect with potential customers.
              </p>
            </div>

            <div className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-soft">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Our focus</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-grey px-4 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-card">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Our mission</p>
              <h3 className="mt-4 text-3xl font-black text-brand-navy">Our mission</h3>
              <p className="mt-5 text-lg leading-8 text-brand-navy/70">
                Our mission is to help businesses reach the right people through thoughtful advertising strategies and effective campaign management.
              </p>
            </div>

            <div className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-soft">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Our vision</p>
              <h3 className="mt-4 text-3xl font-black">Our vision</h3>
              <p className="mt-5 text-lg leading-8 text-white/80">
                To become a trusted advertising partner for businesses looking to build stronger customer connections and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Our values</p>
            <h2 className="mt-4 text-4xl font-black text-brand-navy md:text-5xl">Advertising with a clearer purpose.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {values.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-card"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-navy/70">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey px-4 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-card md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Let&apos;s build your next campaign</p>
              <h3 className="mt-3 text-3xl font-black text-brand-navy md:text-4xl">Smart advertising starts with a clearer strategy.</h3>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-[#e5531d]">
              LET&apos;S WORK TOGETHER <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
