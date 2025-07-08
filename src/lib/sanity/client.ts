import { createClient } from '@sanity/client';
export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2023-08-01',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
});
