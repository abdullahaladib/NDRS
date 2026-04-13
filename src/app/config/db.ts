import mysql from "mysql2/promise";

export const db = async () => {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "NDRS"
  });
}
