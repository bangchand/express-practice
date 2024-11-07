import { DataTypes, Model } from "sequelize";
import conn from "../ConnectionCloud";

interface TodoAttribute {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
}

export class Todo extends Model<TodoAttribute> {
  declare id?: number;
  declare title: string;
  declare description: string;
  declare completed?: boolean;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: conn,
    tableName: "todos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);
