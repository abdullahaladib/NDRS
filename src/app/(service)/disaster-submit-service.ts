"use server";

import { db } from "../config/db"

/*

CREATE TABLE DisasterAlerts (
    `Alert_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `Details` TEXT,
    `Location` VARCHAR(50),
    `Time` DATETIME,
    `Type` VARCHAR(50),
    `Severity` VARCHAR(50)
);
*/

export const diasterSubmit = async (data: any) => {
  await (await db()).query(`INSERT INTO DisasterAlerts (Details, Location, Time, Type, Severity) VALUES ("${data.details}", "${data.location}", NOW(), "${data.type}", "${data.severity}")`);
}