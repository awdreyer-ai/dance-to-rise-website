import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dance to Rise Foundation — Talent Should Never Be Limited by Circumstance",
  description:
    "Dance to Rise Foundation supports talented young Ballroom and Latin-American DanceSport athletes from disadvantaged backgrounds in South Africa.",
  openGraph: {
    title: "Dance to Rise Foundation — Talent Should Never Be Limited by Circumstance",
    description: "Supporting talented young Ballroom and Latin-American DanceSport athletes from disadvantaged backgrounds in South Africa.",
    url: "/",
    type: "website",
    siteName: "Dance to Rise Foundation",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Dance to Rise Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance to Rise Foundation",
    description: "Supporting talented young DanceSport athletes from disadvantaged backgrounds in South Africa.",
    images: ["/logo.png"],
  },
};

const stats = [
  { value: "R10,000+", label: "Average annual cost per competing couple" },
  { value: "Every Year", label: "Talented athletes leave the sport due to cost" },
  { value: "5 Couples", label: "Supported in our inaugural Class of 2027" },
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Talented couples under 18 apply through our annual open application process.",
  },
  {
    number: "02",
    title: "Selected",
    description:
      "An independent Selection Committee scores every application fairly and transparently.",
  },
  {
    number: "03",
    title: "Supported",
    description:
      "Selected couples receive financial support for competition participation all year.",
  },
];

const whatWeDo = [
  "Competition entry fees and registration",
  "Transport to and from competitions",
  "Competition-day meals and refreshments",
  "Dance shoes and essential equipment",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <Image
              src="/logo.png"
              alt="Dance to Rise Foundation"
              width={280}
              height={280}
              className="h-44 sm:h-52 lg:h-64 w-auto"
              priority
            />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1A3578] leading-tight animate-fade-in">
            Talent Should Never Be Limited by Circumstance
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Dance to Rise Foundation supports talented young Ballroom and
            Latin-American DanceSport athletes from disadvantaged backgrounds —
            so they can compete, grow, and rise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
            <Link
              href="/apply"
              className="px-8 py-4 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200 text-base"
            >
              Apply Now
            </Link>
            <Link
              href="/sponsors"
              className="px-8 py-4 border-2 border-[#1A3578] text-[#1A3578] font-semibold rounded-full hover:bg-[#1A3578] hover:text-white transition-colors duration-200 text-base"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-[#F7F9FC] rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#28BACC] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#555555] text-sm lg:text-base leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 lg:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2] mb-6">
                What We Do
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed mb-6">
                Dance to Rise Foundation provides direct financial support to
                talented young DanceSport couples whose potential is at risk of
                being lost to cost. We step in where the financial gap is
                greatest — covering the practical costs that stand between a
                young athlete and the competition floor.
              </p>
              <ul className="space-y-3 mb-8">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4305A]/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#C4305A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#1A1A1A] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programme"
                className="inline-flex items-center gap-2 text-[#2547B2] font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn about the full programme
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#E8EDF5] rounded-2xl aspect-video flex items-center justify-center text-[#555555] font-medium text-lg">
              Programme Photo
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center p-8 rounded-2xl bg-[#F7F9FC] border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-[#C4305A] text-white font-[family-name:var(--font-playfair)] text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#555555] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING SUPPORTERS */}
      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
            Our Founding Corporate Supporters
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 items-center">
            {["Lifestyle Diseases Clinic", "Lifestyle Laboratories", "Aesthetics on the Move"].map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-white rounded-xl border border-gray-200 text-[#1A1A1A] font-medium text-sm shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-[#555555]">Follow us:</span>
            <span className="text-sm font-semibold text-[#1A3578]">@DanceToRiseFoundation</span>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/DanceToRiseFoundation" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#E1306C] hover:opacity-75 transition-opacity duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
              </a>
              <a href="https://www.facebook.com/DanceToRiseFoundation" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#1877F2] hover:opacity-75 transition-opacity duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.tiktok.com/@DanceToRiseFoundation" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-[#1A1A1A] hover:opacity-75 transition-opacity duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.78a4.85 4.85 0 01-1.07-.09z" /></svg>
              </a>
            </div>
          </div>

          <Link
            href="/sponsors"
            className="inline-flex items-center gap-2 mt-6 text-[#2547B2] text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            View sponsorship opportunities
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#28BACC] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-white mb-8">
            Be Part of the Class of 2027
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/apply"
              className="px-8 py-4 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200"
            >
              Apply Now
            </Link>
            <Link
              href="/sponsors"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#28BACC] transition-colors duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
