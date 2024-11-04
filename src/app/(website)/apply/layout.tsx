// src/app/(website)/apply/page.tsx

import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
import ApplicationNotLoggedIn from "@/features/application/components/ApplicationNotLoggedIn";
import ApplicationLayout from "@/features/application/components/ApplicationLayout";

interface Props {
  children: ReactNode;
}

export default async function ApplicationPage({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <ApplicationNotLoggedIn />;
  }

  return <ApplicationLayout user={session.user}>{children}</ApplicationLayout>;
}

export const revalidate = 0;
