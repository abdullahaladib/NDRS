'use server';

import { cookies } from "next/headers";
import { getUser } from "./get-user";
import { db } from "../config/db";

export const volunteerService = async (data: any) => {

  await (await db()).query(`INSERT INTO Volunteers (User_ID, Skills, Prev_Exp) VALUES ("${(await getUser()).User_ID}", "${data.skills}", "${data.experience}")`);

}