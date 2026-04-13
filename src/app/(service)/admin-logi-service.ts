'use server';

import { db } from "../config/db";
import { cookies } from "next/headers";

export const adminLoginService = async (data: any) => {
  const cookieStore = cookies();

  const [results] = await (await db()).query(`SELECT * FROM Admins WHERE Email = "${data.email}" AND Password = "${data.password}"`);
  
  if ((results as unknown as any).length === 0) {
    return false;
  } else {
    cookieStore.set('user', JSON.stringify((results as unknown as any)[0]));
    return true;
  }
}