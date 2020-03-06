// Update with your config settings.
require("dotenv").config("./env");

module.exports = {



  production: {
    client:"pg",
    connection:'postgres://postgres:blitzbuild@blitzbuild.cio1siqsupp2.us-west-2.rds.amazonaws.com:5432/postgres?ssl=true',
    
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }

  },
  

};
