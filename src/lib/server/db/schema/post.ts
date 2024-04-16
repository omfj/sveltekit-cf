import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('post', {
	id: integer('id').notNull().primaryKey(),
	title: text('title').notNull(),
	content: text('content').notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
});

export type Post = (typeof posts)['$inferSelect'];
export type PostInsert = (typeof posts)['$inferInsert'];
