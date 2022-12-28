import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const Country = sequelize.define(
  'country',
  {
    code: {
      type: DataTypes.CHAR(3),
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Continent: {
      type: DataTypes.ENUM(
        'Asia',
        'Europe',
        'North America',
        'Africa',
        'Oceania',
        'Antarctica',
        'South America'
      ),
    },
    Region: {
      type: DataTypes.CHAR(26),
    },
    SurfaceArea: {
      type: DataTypes.FLOAT(10, 2),
    },
    IndepYear: {
      type: DataTypes.SMALLINT,
    },
    Population: {
      type: DataTypes.INTEGER,
    },
    LifeExpectancy: {
      type: DataTypes.FLOAT(3, 1),
    },
    GNP: {
      type: DataTypes.FLOAT(10, 2),
    },
    GNPOld: {
      type: DataTypes.FLOAT(10, 2),
    },
    LocalName: {
      type: DataTypes.CHAR(45),
    },
    GovernmentForm: {
      type: DataTypes.CHAR(45),
    },
    HeadOfState: {
      type: DataTypes.CHAR(60),
    },
    Capital: {
      type: DataTypes.INTEGER,
    },
    Code2: {
      type: DataTypes.CHAR(2),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'country',
  }
);
