import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	driver: 'd1',
	dbCredentials: {
		dbName: 'test-db',
		wranglerConfigPath: './wrangler.toml'
	},
	schema: './src/lib/server/db/schema/index.ts',
	out: './drizzle/migrations'
});
