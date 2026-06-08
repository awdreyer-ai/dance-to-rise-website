import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact Dance to Rise Foundation — whether you are a prospective sponsor, applicant, coach, or media.",
  openGraph: {
    title: "Get in Touch — Dance to Rise Foundation",
    description: "Contact Dance to Rise Foundation — whether you are a prospective sponsor, applicant, coach, or media.",
    url: "/contact",
    type: "website",
    siteName: "Dance to Rise Foundation",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Dance to Rise Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch — Dance to Rise Foundation",
    description: "Contact Dance to Rise Foundation — whether you are a prospective sponsor, applicant, coach, or media.",
    images: ["/logo.png"],
  },
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/DanceToRiseFoundation",
    color: "#E1306C",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/DanceToRiseFoundation",
    color: "#1877F2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@DanceToRiseFoundation",
    color: "#000000",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.78a4.85 4.85 0 01-1.07-.09z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#28BACC] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto animate-fade-in-delay">
            Whether you are a prospective sponsor, a potential applicant, a coach, or a member of
            the media — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 lg:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2] mb-2">
                Dance to Rise Foundation
              </h2>
              <p className="text-[#555555] mb-8 italic">Where Passion Meets Possibility</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@dancetorise.org.za"
                    className="text-[#2547B2] font-medium hover:underline"
                  >
                    info@dancetorise.org.za
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-3">
                    Social Media
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        style={{ backgroundColor: link.color }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity duration-200"
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-2">
                    Response Time
                  </h3>
                  <p className="text-[#1A1A1A]">We aim to respond within 2 business days.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2] mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
