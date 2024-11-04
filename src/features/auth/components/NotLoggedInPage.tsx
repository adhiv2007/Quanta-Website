import React from "react";
import AuthForm from "./LogInForm";

const NotLoggedInPage = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="flex justify-center items-center container p-6 mt-12">
        <AuthForm />
      </div>
    </main>
  );
};

export default NotLoggedInPage;
