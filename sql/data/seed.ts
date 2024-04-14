import fs from "fs";
import path from "path";
import { Database } from "bun:sqlite";

const dbFilePath = path.join(__dirname, "./data.db");
if (fs.existsSync(dbFilePath)) {
    fs.rmSync(dbFilePath);
}
const sql = fs.readFileSync(path.join(__dirname, "./db.seed.sql"), "utf-8");
const db = new Database(dbFilePath);
db.exec(sql);
db.close();