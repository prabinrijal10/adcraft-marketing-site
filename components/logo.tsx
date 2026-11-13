type LogoProps = {
  darkMode?: boolean;
};

export function LogoMark({ darkMode = false }: LogoProps) {
  return (
    <div className="flex items-end gap-3">
      <div className="relative h-16 w-20 md:h-24 md:w-28">
        <div className="absolute left-3 top-4 h-16 w-16 rotate-45 rounded-[20%] bg-[#FE5C21]" style={{ clipPath: 'polygon(0 0, 100% 0, 72% 100%, 0% 100%)' }} />
        <div className="absolute left-3 top-4 h-16 w-16 rotate-45 rounded-[20%] bg-[#FE5C21]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 16% 100%)' }} />
        <div className="absolute left-9 top-0 h-12 w-4 rotate-[-40deg] rounded-full bg-[#FE5C21]" />
      </div>

      <div className="leading-none">
        <div className={`text-[2.7rem] font-black tracking-[-0.06em] md:text-[4.6rem] ${darkMode ? 'text-white' : 'text-brand-navy'}`}>
          AdCraft
        </div>
        <div className={`mt-0 text-[0.9rem] font-extrabold uppercase tracking-[0.7em] md:text-[1.5rem] ${darkMode ? 'text-white/80' : 'text-brand-navy/80'}`}>
          Marketing
        </div>
      </div>
    </div>
  );
}
