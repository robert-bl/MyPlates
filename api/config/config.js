require('dotenv').config()
module.exports = {
  development: {
    database: 'mylates_database',
    dialect: 'postgres'
  },
  test: {
    database: 'myplates_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}