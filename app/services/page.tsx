import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChartLine, CircleDashed, PencilRuler, Target, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <ChartLine size={24} />,
    title: 'Meta Ads Management',
    description:
      'Strategic setup, management and optimization of Facebook, Instagram and WhatsApp advertising campaigns designed around your business objectives.',
  },
  {
    icon: <PencilRuler size={24} />,
    title: 'Content Strategy',
    description:
      'Planning purposeful content that attracts attention, communicates your brand message and supports your advertising campaigns.',
  },
  {
    icon: <Target size={24} />,
    title: 'Audience Targeting & Retargeting',
    description:
      'Identifying relevant audiences and reconnecting with people who have previously interacted with your business.',
  },
  {
    icon: <CircleDashed size={24} />,
    title: 'Ad Creative Strategy',
    description:
      'Developing compelling advertising concepts, creative directions and messaging that capture attention and encourage action.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Campaign Optimization & Performance',
    description:
      'Monitoring campaign performance, testing advertising approaches and making data-informed improvements to campaign effectiveness.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-20 pt-16 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-orange">Our services</p>
            <h1 className="mt-4 text-4xl font-black text-brand-navy md:text-6xl">SMARTER ADVERTISING, BUILT FOR GROWTH.</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => (
              <motion.article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white p-7 shadow-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-orange/10 blur-2xl transition group-hover:bg-brand-orange/20" />
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg">
                    {service.icon}
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.26em] text-brand-orange">Service 0{idx + 1}</span>
                  </div>
                  <h2 className="text-2xl font-black text-brand-navy">{service.title}</h2>
                  <p className="mt-4 text-base leading-7 text-brand-navy/70">{service.description}</p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-navy transition hover:text-brand-orange">
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
