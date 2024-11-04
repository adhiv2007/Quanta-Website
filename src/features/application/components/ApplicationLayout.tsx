import { User } from "next-auth";
import React, { FC, ReactNode } from "react";

interface Props {
  user: User;
  children: ReactNode;
}

const ApplicationLayout: FC<Props> = ({ user, children }) => {
  return (
    <main className="w-full py-24 space-y-8 container">
      <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
      <div>{children}</div>
    </main>
  );
};

export default ApplicationLayout;
