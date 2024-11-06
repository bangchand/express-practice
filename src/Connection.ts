import { Sequelize } from "sequelize";

const conn = new Sequelize("express-practice", "postgres", "d3v99313", {
  host: "localhost",
  dialect: "postgres",
});

export default conn;
