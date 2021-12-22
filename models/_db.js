let { Sequelize } = require("sequelize");
let { DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;
let sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: "mysql",
  host: DB_HOST,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

module.exports = sequelize;
