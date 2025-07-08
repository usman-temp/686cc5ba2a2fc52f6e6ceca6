import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Choose Us - Next Solutions',
  description:
    'Discover why thousands of businesses choose Next Solutions for their digital transformation needs.',
  keywords: ['next solutions', 'why us', 'features', 'advantages'],
};

const features = [
  {
    title: 'Industry Expertise',
    description: '10+ years experience in delivering cutting-edge solutions',
    icon: '/file.svg',
  },
  {
    title: 'Award-Winning Team',
    description: 'Recognized by TechCrunch as top innovators 2023',
    icon: '/globe.svg',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team available round the clock',
    icon: '/window.svg',
  },
];

export default function WhyUs() {
  return (
    <div className="min-h-screen py-20 px-8 sm:px-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Why Choose <span className="text-blue-600">Next Solutions</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We combine cutting-edge technology with human-centered design to
              deliver exceptional results.
            </p>
            <CTAButton />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="/next.svg"
              alt="Our workspace"
              fill
              className="object-cover dark:invert"
            />
          </div>
        </div>

        <FeaturesGrid />

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <CTAButton />
        </div>
      </section>
    </div>
  );
}

const FeaturesGrid = () => (
  <div className="grid md:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <div
        key={index}
        className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      >
        <Image
          src={feature.icon}
          alt={feature.title}
          width={40}
          height={40}
          className="mb-4 dark:invert"
        />
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
);

const CTAButton = () => (
  <Link
    href="/contact"
    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full
             hover:bg-blue-700 transition-colors text-lg font-semibold
             w-full sm:w-auto text-center"
  >
    Schedule a Free Consultation
  </Link>
);
