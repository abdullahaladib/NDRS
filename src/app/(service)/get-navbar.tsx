"use server";

import { getUser } from "./get-user";
import { UserNavbar } from "@/components/component/UserNavbar";
import { Navbar } from "@/components/component/navbar";

export const GetNavbar = async () => {
  
  const user = await getUser();

  if (user) {
    return <UserNavbar />
  } else {
    return <Navbar />
  }
}