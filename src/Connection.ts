import { Sequelize } from "sequelize";

const conn = new Sequelize("contact-express", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

export default conn;
