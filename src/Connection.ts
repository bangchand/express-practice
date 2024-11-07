import { Dialect, Sequelize } from "sequelize";
import config from "./config/config.json";

const env = process.env.NODE_ENV as string;
const dbConfig = config[env];

const conn = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect as Dialect,
  }
);

export default conn;
