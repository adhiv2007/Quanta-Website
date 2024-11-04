import React from "react";
import RegisterForm from "./RegisterForm";

const SignupPage = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="flex justify-center items-center container mt-16 px-6">
        <RegisterForm />
      </div>
    </main>
  );
};

export default SignupPage;
