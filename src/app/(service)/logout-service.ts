"use server";

import { cookies } from "next/headers";

export const logoutService = () => {
  const cookieStore = cookies();
  cookieStore.delete("user"); // deletes from cache / cookie
}