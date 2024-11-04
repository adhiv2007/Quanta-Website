// src/app/(website)/apply/page.tsx

import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import SignupPage from "@/features/auth/components/SignupPage";

export default async function ApplicationPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <SignupPage />;
  }

  return <></>;
}

export const revalidate = 0;
