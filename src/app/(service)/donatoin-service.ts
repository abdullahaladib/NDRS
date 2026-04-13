'use server';

import { db } from "../config/db";
import { getUser } from "./get-user";

export const donationService = async (data: any) => {
    await (await db()).query(`INSERT INTO Donations (User_ID, Amount, Type, Time) VALUES ("${(await getUser()).User_ID}", "${data.amount}", "${data.type}", "${new Date().toISOString()}")`);
}