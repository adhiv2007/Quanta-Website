// src/app/(website)/apply/page.tsx

import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import NotLoggedInPage from "@/features/auth/components/NotLoggedInPage";

export default async function ApplicationPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <NotLoggedInPage />;
  }

  return <></>;
}

export const revalidate = 0;
