import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:EAm6oq2bYHfB@ep-fancy-grass-a8ql8436.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require',
  },
});