import type { Metadata } from "next";
import Link from "next/link";
import SponsorEnquiryForm from "@/components/forms/SponsorEnquiryForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Become a sponsor or partner of Dance to Rise Foundation and help talented young DanceSport athletes across South Africa.",
  openGraph: {
    title: "Partner With Us — Dance to Rise Foundation",
    description: "Become a sponsor or partner of Dance to Rise Foundation and help talented young DanceSport athletes across South Africa.",
    url: "/sponsors",
    type: "website",
    siteName: "Dance to Rise Foundation",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Dance to Rise Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Us — Dance to Rise Foundation",
    description: "Become a sponsor or partner of Dance to Rise Foundation and help talented young DanceSport athletes across South Africa.",
    images: ["/logo.png"],
  },
};

const whyPartner = [
  {
    icon: "🌱",
    title: "Youth Development",
    description: "Directly support young South African athletes",
  },
  {
    icon: "🤝",
    title: "Community Impact",
    description: "Demonstrate your commitment to social development",
  },
  {
    icon: "📣",
    title: "Brand Visibility",
    description: "Recognition across website, social media, and events",
  },
  {
    icon: "📋",
    title: "Tax Benefits",
    description: "Section 18A status applied for (Year 2)",
  },
];

const tiers = [
  {
    name: "FOUNDING PARTNER",
    borderColor: "border-[#CC9438]",
    headerBg: "bg-[#CC9438]",
    amount: "R150,000+",
    description:
      "Exclusive Founding Partner designation. Premium logo placement across all Foundation media, documentary recognition, annual impact report, event presence.",
    badge: "EXCLUSIVE — 1 POSITION",
    badgeBg: "bg-[#CC9438]",
  },
  {
    name: "PLATINUM PARTNER",
    borderColor: "border-[#9E9E9E]",
    headerBg: "bg-[#9E9E9E]",
    amount: "R75,000",
    description:
      "Funds the entire beneficiary programme. Platinum recognition across website, social media, events and branding. Annual sponsor report.",
    badge: null,
    badgeBg: "",
  },
  {
    name: "GOLD PARTNER",
    borderColor: "border-[#CC9438]",
    headerBg: "bg-[#CC9438]/80",
    amount: "R40,000",
    description:
      "Co-sponsor recognition, website branding, event acknowledgement, annual reporting.",
    badge: null,
    badgeBg: "",
  },
  {
    name: "SILVER PARTNER",
    borderColor: "border-gray-400",
    headerBg: "bg-gray-400",
    amount: "R20,000",
    description:
      "Website logo placement, event recognition, annual report acknowledgement.",
    badge: null,
    badgeBg: "",
  },
  {
    name: "BRONZE PARTNER",
    borderColor: "border-amber-700",
    headerBg: "bg-amber-700",
    amount: "R6,000–R19,999",
    description: "Website logo placement, annual report recognition.",
    badge: null,
    badgeBg: "",
  },
  {
    name: "COUPLE SPONSOR",
    borderColor: "border-[#28BACC]",
    headerBg: "bg-[#28BACC]",
    amount: "R15,000",
    description:
      "Support one specific athlete couple for the full year. Quarterly updates, annual progress report, website recognition.",
    badge: "5 POSITIONS",
    badgeBg: "bg-[#28BACC]",
  },
  {
    name: "COMMUNITY SUPPORTER",
    borderColor: "border-[#2547B2]",
    headerBg: "bg-[#2547B2]",
    amount: "From R500/month",
    description:
      "Bronze R500/m | Silver R1,000/m | Gold R2,500/m. Website listing and annual report recognition.",
    badge: null,
    badgeBg: "",
  },
];

const categoryPartners = [
  { title: "Official Footwear Partner", description: "Your brand on every pair of dance shoes we support" },
  { title: "Official Transport Partner", description: "Getting athletes to every competition floor" },
  { title: "Official Nutrition Partner", description: "Fuelling athletes on competition days" },
  { title: "Official Media Partner", description: "Documenting and sharing our athletes' stories" },
  { title: "Official Apparel Partner", description: "Dressing our athletes for success" },
  { title: "Official Healthcare Partner", description: "Keeping our athletes healthy and performance-ready" },
  { title: "Official Education Partner", description: "Supporting our athletes beyond the dance floor" },
];

export default function SponsorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1A3578] via-[#1A3578] to-[#CC9438]/60 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            Partner With Us
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-[#CADCFC] max-w-2xl mx-auto animate-fade-in-delay">
            Every contribution creates an opportunity. Every opportunity changes a life.
          </p>
          <div className="mt-8 animate-fade-in-delay-2">
            <a
              href="/files/sponsorship-proposal.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#CC9438] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#A87828] transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Sponsorship Proposal (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              Why Partner With Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item) => (
              <div
                key={item.title}
                className="bg-[#F7F9FC] rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[#1A1A1A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#555555] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORSHIP TIERS */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              Sponsorship Tiers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border-t-4 ${tier.borderColor} hover:shadow-md transition-shadow duration-200`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-[family-name:var(--font-playfair)] font-bold text-base text-[#1A1A1A]">
                      {tier.name}
                    </h3>
                    {tier.badge && (
                      <span className={`${tier.badgeBg} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-[#C4305A] mb-3 font-[family-name:var(--font-playfair)]">
                    {tier.amount}
                  </div>
                  <p className="text-[#555555] text-sm leading-relaxed">{tier.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY PARTNERS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              Category Partnerships
            </h2>
            <p className="mt-3 text-[#555555]">
              Become the official partner in your industry category
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryPartners.map((partner) => (
              <div
                key={partner.title}
                className="bg-[#F7F9FC] rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-semibold text-[#1A1A1A] mb-1 text-sm">{partner.title}</h3>
                <p className="text-[#555555] text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT SPONSORS */}
      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2] mb-6">
            Our Founding Corporate Supporters
          </h2>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {["Lifestyle Diseases Clinic", "Lifestyle Laboratories", "Aesthetics on the Move"].map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-white rounded-xl border border-[#CC9438]/30 text-[#1A1A1A] font-medium text-sm shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#555555] italic">Permanent Founding Supporter recognition</p>
        </div>
      </section>

      {/* SPONSOR ENQUIRY FORM */}
      <section id="enquire" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2547B2]">
              Sponsor Enquiry
            </h2>
            <p className="mt-2 text-[#555555]">
              Ready to make a difference? Complete the form below and we will be in touch.
            </p>
          </div>
          <SponsorEnquiryForm />
        </div>
      </section>
    </>
  );
}
