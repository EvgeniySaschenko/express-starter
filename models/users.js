let { Model, DataTypes } = require("sequelize");
let db = require("./_db");
// Поля таблицы
let table = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  avatar: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  name: {
    type: DataTypes.STRING(255),
    unique: true,
    defaultValue: null,
  },
  mail: {
    type: DataTypes.STRING(255),
    unique: true,
    defaultValue: null,
  },
  accessRight: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  dateCreate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  dateUpdated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
};

class M_Users extends Model {}

M_Users.init(table, {
  sequelize: db,
  modelName: "users",
});

module.exports = { M_Users, table };
