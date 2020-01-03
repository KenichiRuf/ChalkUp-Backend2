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
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true
  }
};
