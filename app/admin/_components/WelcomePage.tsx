"use client";

import LoginForm from "@/app/admin/_components/LoginForm";
import SignupForm from "@/app/admin/_components/SignupForm";
import { cn } from "cn";
import { Info } from "lucide-react";
import React from "react";

const WelcomePage = () => {
  const [action, setaction] = React.useState("login");
  const actions = ["login", "register"];
  return (
    <div className="grid sm:grid-cols-2 h-screen">
      <div className="flex justify-center items-center bg-linear-to-br from-black to-primary">
        <div className="w-full sm:w-2/3 p-4 space-y-4 text-white">
          <h1 className="text-4xl font-black">
            Richtec Professional Equipments . Admin Portal.
          </h1>
          <p className="tracking-widest mt-3">
            Join thousands of growing businesses using HeyHR to recruit, manage
            and grow their workforce.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white">
        <div className="w-full sm:w-2/3 p-4 space-y-5">
          <div className="space-y-2">
            <div className="grid grid-cols-2 bg-gray-300 rounded-md p-2">
              {actions.map((item) => (
                <div
                  className={cn(
                    "h-10 text-center text-lg flex items-center justify-center rounded-sm cursor-pointer uppercase font-bold",
                    action === item ? "bg-white" : "bg-transparent"
                  )}
                  key={item}
                  onClick={() => setaction(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex gap-2 text-gray-500">
              <Info className="size-5" />
              <p className=" text-sm flex-1">
                Sign in to your account, please not that only admin and staff
                have access.
              </p>
            </div>
          </div>
          {action === "login" && <LoginForm />}
          {action === "register" && <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
