import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL); // initialize Neon client
export const db = drizzle(sql); // pass the Neon client directly to drizzle
