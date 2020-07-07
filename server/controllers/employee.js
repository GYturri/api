const Sequelize = require("sequelize");

import models from "../../database/models";


export async function addEmployee(req, res) {
  try {
    const { body } = req;


    const response = await models.employee.create(body)
    res.send(response).status(200);
  } catch (error) {
    res.status(500).send(error.errors[0].message);
  }
}