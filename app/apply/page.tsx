import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applications Closed",
  description:
    "Applications to Dance to Rise Foundation are currently closed. Follow us on social media to be notified when the next cycle opens.",
  openGraph: {
    title: "Applications Closed — Dance to Rise Foundation",
    description: "Applications are currently closed. Follow us on social media to be notified when the next cycle opens.",
    url: "/apply",
    type: "website",
    siteName: "Dance to Rise Foundation",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Dance to Rise Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applications Closed — Dance to Rise Foundation",
    description: "Applications are currently closed. Follow us on social media to be notified when the next cycle opens.",
    images: ["/logo.png"],
  },
};

export default function ApplyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1A3578] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            Applications Closed
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-delay">
            The application window for the Class of 2027 is now closed.
          </p>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="py-16 lg:py-24 bg-[#F7F9FC]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#1A3578]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1A3578]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
              </svg>
            </div>

            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A3578]">
                Thank You for Your Interest
              </h2>
              <p className="text-[#555555] leading-relaxed">
                Applications for the Dance to Rise Foundation Class of 2027 beneficiary programme are now closed. We received applications from talented athletes across South Africa and are grateful for your interest.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Follow us on social media or get in touch to be notified when the next application cycle opens.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#2547B2] text-white font-semibold rounded-full hover:bg-[#1A3578] transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link
                href="/programme"
                className="px-6 py-3 border-2 border-[#2547B2] text-[#2547B2] font-semibold rounded-full hover:bg-[#2547B2] hover:text-white transition-colors duration-200"
              >
                About the Programme
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-[#555555] mb-3">Follow us for updates:</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/DanceToRiseFoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#E1306C] hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/DanceToRiseFoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1877F2] hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@DanceToRiseFoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.78a4.85 4.85 0 01-1.07-.09z" />
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
