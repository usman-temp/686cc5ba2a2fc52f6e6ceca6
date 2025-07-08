import Link from 'next/link';

export function CTAButton() {
  return (
    <Link
      href="/contact"
      className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl w-full sm:w-auto text-center transform hover:-translate-y-1"
    >
      Schedule a Free Consultation
    </Link>
  );
}
