// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/chalkup.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    useNullAsDefault: true,
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    }
  }
};
