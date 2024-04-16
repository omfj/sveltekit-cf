import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export const getDB = (binding: D1Database) => {
	return drizzle(binding, {
		schema
	});
};

export type Database = ReturnType<typeof getDB>;
