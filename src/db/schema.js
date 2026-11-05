const { mysqlTable, int, varchar, boolean } = require("drizzle-orm/mysql-core");

const products2 = mysqlTable("products2", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
  price: int("price").notNull(),
  inStock: boolean("inStock").default(false),
});

module.exports = { products2 };
