import { DataSource } from "typeorm"

export const connectionSource = new DataSource(
  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "Passarico.09",
    "database": "crud_typeorm",
    "synchronize": false,
    "logging": true,
    "entities": ["src/entities/*.ts"],
    "migrations": ["src/database/migrations/*.ts"],
  }
);
