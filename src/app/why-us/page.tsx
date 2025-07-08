import { CTAButton } from '@/components/cta-button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity/client';
interface MissionVision {
  mission: string;
  vision: string;
  values: Array<{ title: string; description: string; icon: string }>;
}
interface Feature {
  title: string;
  description: string;
  icon: string;
}
async function getMissionVision(): Promise<MissionVision> {
  return client.fetch(
    "*[_type == 'missionVision'][0]{    mission,    vision,    values[]{      title,      description,      icon    }  }"
  );
}
async function getFeatures(): Promise<Feature[]> {
  return client.fetch("*[_type == 'features']{title, description, icon}");
}
export const metadata: Metadata = {
  title: 'Why Choose Us - Next Solutions',
  description:
    'Discover why thousands of businesses choose Next Solutions for their digital transformation needs.',
  keywords: ['next solutions', 'why us', 'features', 'advantages'],
};
export default async function WhyUs() {
  const [missionVision, features] = await Promise.all([
    getMissionVision(),
    getFeatures(),
  ]);
  if (!missionVision || !features) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {' '}
      <section className="max-w-7xl mx-auto space-y-20">
        {' '}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {' '}
          <div className="space-y-6">
            {' '}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}
              Why Choose Next Solutions{' '}
            </h1>{' '}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {' '}
              {missionVision.mission}{' '}
            </p>{' '}
            <CTAButton />{' '}
          </div>{' '}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            {' '}
            <Image
              src="/next.svg"
              alt="Our digital solutions"
              fill
              className="object-cover dark:invert"
              priority
            />{' '}
          </div>{' '}
        </div>{' '}
        <section className="space-y-12">
          {' '}
          <div className="text-center max-w-3xl mx-auto">
            {' '}
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>{' '}
            <p className="text-gray-600 dark:text-gray-400">
              {' '}
              The foundation of everything we do{' '}
            </p>{' '}
          </div>{' '}
          <div className="grid md:grid-cols-3 gap-8">
            {' '}
            {missionVision.values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {' '}
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  {' '}
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={32}
                    height={32}
                    className="dark:invert"
                  />{' '}
                </div>{' '}
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>{' '}
                <p className="text-gray-600 dark:text-gray-400">
                  {' '}
                  {value.description}{' '}
                </p>{' '}
              </div>
            ))}{' '}
          </div>{' '}
        </section>{' '}
        <FeaturesGrid features={features} />{' '}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          {' '}
          <div className="max-w-2xl mx-auto text-white">
            {' '}
            <h2 className="text-3xl font-bold mb-4">
              {' '}
              Ready to Transform Your Business?{' '}
            </h2>{' '}
            <p className="mb-8 text-blue-100">
              {' '}
              Join hundreds of satisfied clients who&apos;ve accelerated their
              growth with our solutions{' '}
            </p>{' '}
            <CTAButton />{' '}
          </div>{' '}
        </section>{' '}
      </section>{' '}
    </div>
  );
}
const FeaturesGrid = ({ features }: { features: Feature[] }) => (
  <section className="space-y-12">
    {' '}
    <div className="text-center max-w-3xl mx-auto">
      {' '}
      <h2 className="text-3xl font-bold mb-4">Why We Stand Out</h2>{' '}
      <p className="text-gray-600 dark:text-gray-400">
        {' '}
        Proven results across industries{' '}
      </p>{' '}
    </div>{' '}
    <div className="grid md:grid-cols-3 gap-8">
      {' '}
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
          {' '}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />{' '}
          <Image
            src={feature.icon}
            alt={feature.title}
            width={40}
            height={40}
            className="mb-6 dark:invert"
          />{' '}
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>{' '}
          <p className="text-gray-600 dark:text-gray-400">
            {' '}
            {feature.description}{' '}
          </p>{' '}
        </div>
      ))}{' '}
    </div>{' '}
  </section>
);
