import { ArrowUpRight, Check, Compass, Laptop, Code2, Layers } from 'lucide-react';
import { services } from '../../data/services';

export default function Services() {
  const icons = {
    'landing-pages': <Compass className="w-5 h-5 text-cyan-400" />,
    'business-websites': <Laptop className="w-5 h-5 text-emerald-400" />,
    'custom-web-experiences': <Code2 className="w-5 h-5 text-violet-400" />
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-28 border-b border-white/10 bg-neutral-950/60">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>02 / How I Can Help</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-100 leading-[1.05] break-words">
            Websites with purpose.
            <br />
            <span className="text-neutral-500 font-light">Built to feel considered.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            For creators, businesses and founders who need a clear, fast and thoughtful online presence—not another bloated generic template.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8 hover:border-white/20 transition-all shadow-xl group"
            >
              <div>
                {/* Header / Number */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <span className="p-2.5 rounded-xl border border-white/10 bg-neutral-950">
                    {icons[service.id]}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                    {service.num} / SERVICE
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-cyan-300/90 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    Key Deliverables
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Scope & Action */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Scope & Pricing
                  </span>
                  <span className="text-xs font-semibold text-neutral-200">
                    {service.pricing}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
