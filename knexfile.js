module.exports = {
  development: {
    client: 'mysql',
    connection: { 
      database: 'default_database',
      host: 'db',
      password: 'secret',
      user: 'default_user'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/api/migrations'
    }
  }
};
