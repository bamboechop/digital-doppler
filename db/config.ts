import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const users = defineTable({
  columns: {
    user_id: column.number({ primaryKey: true }),
    user_name: column.text(),
    display_name: column.text(),
  },
});

const notes = defineTable({
  columns: {
    note_id: column.number({ primaryKey: true }),
    user_id: column.number({ references: () => users.columns.user_id }),
    text: column.text(),
    status: column.text({ default: 'in-progress' }),
    date: column.date(),
  },
});

export default defineDb({
  tables: {
    users,
    notes,
  },
});
