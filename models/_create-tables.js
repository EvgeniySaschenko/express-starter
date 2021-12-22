require("dotenv").config();
let db = require("./_db");
let users = require("./users");
let models = [users];
// node models/_create-tables.js
// Создаём таблицы в БД
for (let model of models) {
  db.getQueryInterface().createTable("users", model.table);
}
