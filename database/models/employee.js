'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};