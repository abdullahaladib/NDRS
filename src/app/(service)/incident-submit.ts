'use server';

import { db } from "@/app/config/db";

/*
const data = {
      incident_type: target.incident_type.value,
      incident_details: target.incident_details.value,
      locaiton: target.incident_location.value,
      resource_type: target.resource_type.value,
      contact: target.contact_number.value,
    };
*/

/*
CREATE TABLE IncidentReports (
    `Report_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `Type` VARCHAR(50) NOT NULL,
    `Details` TEXT,
    `Location` VARCHAR(50),
    `Time` DATETIME,
    `Status` VARCHAR(50),
    `Resource_Type` VARCHAR(50)
);
*/
export const incidentSubmit = async (data: any) => {

  await (await db()).query(`INSERT INTO IncidentReports (Type, Details, Location, Resource_type, Time) VALUES ("${data.incident_type}", "${data.incident_details}", "${data.location}", "${data.resource_type}", NOW())`)
}