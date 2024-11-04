import React from "react";
import Link from "next/link";

const ApplicationNotLoggedIn = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen text-white">
      <div className="text-center container p-6">
        <h1 className="text-4xl font-bold mb-4">
          Application for the Summer Cohort
        </h1>
        <p className="text-lg">
          We are currently accepting applications for scholars, and mentors.
        </p>
        <p className="text-lg">
          Please{" "}
          <Link href="/login" className="text-blue-400 underline font-semibold">
            log in
          </Link>{" "}
          or{" "}
          <Link
            href="/signup"
            className="text-blue-400 underline font-semibold"
          >
            create an account
          </Link>{" "}
          to apply.
        </p>
      </div>
    </main>
  );
};

export default ApplicationNotLoggedIn;
