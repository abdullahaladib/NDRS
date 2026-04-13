"use server";

import { cookies } from "next/headers";

export const getUser = () => {
    const cookieStore = cookies();
    const userCookie = cookieStore.get("user");
    if (!userCookie) {
        return undefined;
    }

    return JSON.parse(cookieStore.get("user")?.value as unknown as any);
}