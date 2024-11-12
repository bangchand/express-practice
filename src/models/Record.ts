import { Model, DataTypes } from "sequelize";
import sequelize from "../ConnectionCloud";

class Record extends Model {}

Record.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: "records",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

export default Record;
