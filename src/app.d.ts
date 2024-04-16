// See https://kit.svelte.dev/docs/types#app

import type { Database } from '$lib/server/db/drizzle';

// for information about these interfaces
interface Env {
	DB: D1Database;
	KV: KVNamespace;
}

declare global {
	namespace App {
		interface Locals {
			db: Database;
		}

		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};
