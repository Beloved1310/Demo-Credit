const bcrypt = require("bcrypt");
const { knex } = require("../../db/db");
const signUpValidate = require("../../validation/signupValidation");

module.exports = async (req, res) => {
  const { value, error } = signUpValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const existedUser = await knex("users")
    .select("*")
    .where("email", value.email)
    .limit(1);

  if (existedUser && existedUser.length)
    return res.status(400).send({ error: "User already registered" });
  const salt = await bcrypt.genSalt(10);
  value.password = await bcrypt.hash(value.password, salt);
  value.account = Math.floor(Math.random() * 1000000000);

  await knex("users").insert(value);

  const data = { name: value.name, value: value.email };
  return res.send({
    message: "Your account is created, proceed to login",
    data,
  });
};
