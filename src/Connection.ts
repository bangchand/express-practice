import { Dialect, Sequelize } from "sequelize";
import config from "./config/config.json";
import { Config } from "./config/config.d"; // Import tipe Config

const env = process.env.NODE_ENV as keyof Config;
const dbConfig = config[env];

const password = dbConfig.password === null ? undefined : dbConfig.password;

const conn = new Sequelize(dbConfig.database, dbConfig.username, password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect as Dialect,
});

export default conn;
