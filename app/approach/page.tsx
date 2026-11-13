import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CircleArrowRight, Rocket, Search, Sparkles, Target } from 'lucide-react';

const steps = [
  { title: 'Discover', text: 'Understand the client\'s business, goals, audience and advertising requirements.' },
  { title: 'Strategize', text: 'Develop an advertising strategy based on the business objectives.' },
  { title: 'Create', text: 'Plan advertising creatives, messaging and campaign structure.' },
  { title: 'Launch', text: 'Set up and launch campaigns across relevant Meta advertising platforms.' },
  { title: 'Optimize', text: 'Monitor campaign performance, analyze results and make improvements.' },
];

const concepts = [
  'E-commerce product advertising',
  'Real estate lead generation',
  'Service business advertising',
  'WhatsApp customer acquisition',
];

export default function ApproachPage() {
  return (
    <>
      <section className="px-4 pb-20 pt-16 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">How we work</p>
            <h1 className="mt-4 text-4xl font-black text-brand-navy md:text-6xl">OUR APPROACH TO SMARTER ADVERTISING.</h1>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                className="grid gap-6 rounded-[2rem] border border-brand-navy/10 bg-white p-6 shadow-card md:grid-cols-[120px_1fr] md:items-center"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="flex items-center gap-4 md:block">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-lg font-black text-white">
                    {idx + 1}
                  </div>
                  <p className="mt-0 text-[11px] uppercase tracking-[0.25em] text-brand-orange md:mt-4">Step {idx + 1}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-brand-navy">{step.title}</h2>
                  <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-navy/70">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey px-4 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Creative direction</p>
            <h2 className="mt-4 text-4xl font-black text-brand-navy md:text-5xl">OUR CREATIVE DIRECTION</h2>
            <p className="mt-4 text-lg text-brand-navy/70">Illustrative concepts for future campaign planning.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {concepts.map((concept, idx) => (
              <motion.div
                key={concept}
                className="rounded-[2rem] bg-white p-6 shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                  {idx === 0 && <Target size={26} />}
                  {idx === 1 && <Search size={26} />}
                  {idx === 2 && <Sparkles size={26} />}
                  {idx === 3 && <Rocket size={26} />}
                </div>
                <h3 className="text-xl font-black text-brand-navy">{concept}</h3>
                <p className="mt-3 text-base leading-7 text-brand-navy/70">
                  Sample creative direction concept to support strategic campaign planning and audience intent.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-brand-navy p-8 text-white shadow-soft md:p-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Our promise</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">ADVERTISING WITH A CLEARER PURPOSE.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {['Strategic Thinking', 'Audience-Focused Advertising', 'Creative Campaign Planning', 'Data-Informed Optimization', 'Business-Focused Approach'].map((item, idx) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-sm font-black text-white">
                  {idx + 1}
                </div>
                <p className="text-base font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
