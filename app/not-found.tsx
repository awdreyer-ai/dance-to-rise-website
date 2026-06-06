import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-20 px-4 bg-[#F7F9FC]">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Dance to Rise Foundation"
            width={120}
            height={48}
            className="h-12 w-auto"
          />
        </div>
        <div className="font-[family-name:var(--font-playfair)] text-7xl font-bold text-[#C4305A] mb-4">
          404
        </div>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2547B2] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#555555] text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
