import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'default_project_id',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2023-08-01',
  useCdn: true,
});
