'use server';

import { db } from "../config/db";

export const signupService = async (data: any) => {
  
  await (await db()).query(`INSERT INTO Users ( Name, Email, Password, Address, Phone) VALUES ("${data.name}", "${data.email}", "${data.password}", "${data.address}", "${data.phone}")`);
}