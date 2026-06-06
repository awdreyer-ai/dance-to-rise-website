import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact Dance to Rise Foundation — whether you are a prospective sponsor, applicant, coach, or media.",
};

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
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
                        className="px-4 py-2 bg-white rounded-full border border-gray-200 text-[#555555] text-sm font-medium hover:border-[#2547B2] hover:text-[#2547B2] transition-colors duration-200"
                      >
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
