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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Next Solutions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              We bridge the gap between technology and business success through
              innovative solutions tailored to your unique needs. Our
              human-centered approach ensures we deliver measurable results that
              drive growth.
            </p>
            <CTAButton />
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/next.svg"
              alt="Our digital solutions"
              fill
              className="object-cover dark:invert"
              priority
            />
          </div>
        </div>

        {/* Values Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The foundation of everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Client-Centric Approach',
                description: 'Your success is our primary metric',
                icon: '/user.svg',
              },
              {
                title: 'Transparent Process',
                description: 'Clear communication at every stage',
                icon: '/shield.svg',
              },
              {
                title: 'Continuous Innovation',
                description: 'Always pushing technological boundaries',
                icon: '/rocket.svg',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <FeaturesGrid />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-blue-100">
              Join hundreds of satisfied clients who've accelerated their growth
              with our solutions
            </p>
            <CTAButton />
          </div>
        </section>
      </section>
    </div>
  );
}

const FeaturesGrid = () => (
  <section className="space-y-12">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Why We Stand Out</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Proven results across industries
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Image
            src={feature.icon}
            alt={feature.title}
            width={40}
            height={40}
            className="mb-6 dark:invert"
          />
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const CTAButton = () => (
  <Link
    href="/contact"
    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full
             hover:bg-gray-50 transition-all duration-300 text-lg font-semibold
             shadow-lg hover:shadow-xl w-full sm:w-auto text-center
             transform hover:-translate-y-1"
  >
    Schedule a Free Consultation
  </Link>
);

             hover:bg-blue-700 transition-colors text-lg font-semibold
             w-full sm:w-auto text-center"
  >
    Schedule a Free Consultation
  </Link>
);
