import dotenv from "dotenv";
import * as sql from "mssql";

dotenv.config();

export const sqlConfig: sql.config = {
  user: process.env.DB_USER as string || 'sa',
  password: process.env.DB_PWD as string || '1234',
  database: process.env.DB_NAME as string ||'talky',
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
