import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const conn = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  logging: false,
});

export default conn;
