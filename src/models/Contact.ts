import { DataTypes, Model } from "sequelize";
import conn from "../Connection.ts";

interface ContactAttribute {
  id: number;
  name: string;
  gender: string;
}

export class Contact extends Model<ContactAttribute> {
  declare id: number;
  declare name: string;
  declare gender: string;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      primaryKey: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      primaryKey: false,
    },
  },
  {
    sequelize: conn,
    tableName: "contacts",
    timestamps: false,
  }
);
