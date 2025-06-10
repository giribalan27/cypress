import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const workspaces = pgTable('workspaces', {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string'
    }).defaultNow().notNull(),
    workspaceOwner: uuid('workspace_owner').notNull(),
    title: text('title').notNull(),
    iconId: text('icon_id').notNull(),
    inTrash: text('in_trash'),
    bannerUrl: text('banner_url'),
    data: text('data'),
    logo: text('logo')
})


export const folders = pgTable('folders', {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string'
    }).defaultNow().notNull(),

    title: text('title').notNull(),
    iconId: text('icon_id').notNull(),
    inTrash: text('in_trash'),
    data: text('data'),
    logo: text('logo'),
    bannerUrl: text('banner_Url'),
    workspaceId: uuid('workspace_id').references(() => workspaces.id, {
        onDelete: 'cascade'
    }).notNull()
}) 

export const files = pgTable('files', {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string'
    }).defaultNow().notNull(),
    title: text('title').notNull(),
    iconId: text('icon_id').notNull(),
    inTrash: text('in_trash'),
    data: text('data'),
    logo: text('logo'),
    bannerUrl: text('banner_Url'),
    workspaceId: uuid('workspace_id').notNull()
        .references(() => workspaces.id, {
            onDelete: 'cascade',
        }),
    folderId: uuid('folder_id').notNull()
        .references(() => folders.id, {
            onDelete: 'cascade',
        }),
})