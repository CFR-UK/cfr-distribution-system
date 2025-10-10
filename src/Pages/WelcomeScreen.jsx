import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/mainmenu.png')" }}
    >
      {/* Outer card */}
      <div
        className="bg-white/10 backdrop-blur-md border border-white/10 
                   rounded-3xl py-8 px-6 sm:py-10 sm:px-8 lg:py-12 lg:px-10 
                   w-[95%] max-w-2xl shadow-2xl flex flex-col items-center 
                   max-h-[90vh] overflow-auto"
      >
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-12 mb-3" />

        {/* Heading */}
        <h1 className="text-white text-xl font-semibold text-center">
          Welcome Distributor!
        </h1>
        <p className="text-white/80 text-sm text-center mb-8">
          Please choose an option to continue
        </p>

        {/* Two equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full items-center">
          {/* Left side */}
          <div className="flex flex-col justify-between h-full w-full max-w-md mx-auto space-y-5">
            <button
              onClick={() => navigate("/signup-login?tab=signup")}
              className="flex flex-col items-center justify-center gap-2 
                         bg-white/5 hover:bg-[#212121]/50 focus:bg-[#EA7D00]/40 focus:outline-none
                         text-white rounded-xl px-4 sm:px-6 border border-white/20 transition-all min-h-[120px]"
            >
              <Icon icon="tabler:edit" width={42} height={42} />
              <span className="flex items-center gap-1 text-base sm:text-lg">
                Signup
                <Icon
                  icon="mingcute:right-line"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />
              </span>
            </button>

            <button
              onClick={() => navigate("/signup-login?tab=login")}
              className="flex flex-col items-center justify-center gap-2 
                         bg-white/5 hover:bg-[#212121]/50 focus:bg-[#EA7D00]/40 focus:outline-none
                         text-white rounded-xl px-4 sm:px-6 border border-white/20 transition-all min-h-[120px]"
            >
              <Icon icon="hugeicons:user-unlock-01" width={42} height={42} />
              <span className="flex items-center gap-1 text-base sm:text-lg">
                Login
                <Icon
                  icon="mingcute:right-line"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />
              </span>
            </button>
          </div>

          {/* Right side */}
          <div
            className="bg-white/10 border border-white/20 
                       rounded-2xl p-6 flex justify-center items-center 
                       w-full max-w-md mx-auto min-h-[200px]"
          >
            <img
              src="/warehouse-illustration.png"
              alt="Warehouse illustration"
              className="object-contain max-h-56 sm:max-h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
