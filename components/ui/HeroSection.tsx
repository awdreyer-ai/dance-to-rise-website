interface HeroSectionProps {
  title: string;
  subtitle?: string;
  background?: "navy" | "blue" | "red" | "teal" | "gold-navy";
  centered?: boolean;
  children?: React.ReactNode;
}

const bgClasses = {
  navy: "bg-[#1A3578]",
  blue: "bg-[#2547B2]",
  red: "bg-[#C4305A]",
  teal: "bg-[#28BACC]",
  "gold-navy": "bg-gradient-to-br from-[#1A3578] via-[#1A3578] to-[#CC9438]",
};

export default function HeroSection({
  title,
  subtitle,
  background = "navy",
  centered = true,
  children,
}: HeroSectionProps) {
  return (
    <section className={`${bgClasses[background]} py-16 lg:py-24`}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${centered ? "text-center" : ""}`}
      >
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg lg:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-delay">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-in-delay-2">{children}</div>}
      </div>
    </section>
  );
}
