import React, { useState } from "react";
import ActionButton from "../components/ActionButton";
import Code from "../components/Code";
import { useNavigate } from "react-router-dom";

export default function ResetCode() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/mainmenu.png')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="bg-gray-500/30 backdrop-blur-lg border border-gray-400/30 
        rounded-3xl py-8 px-8 w-[95%] md:w-full max-w-lg shadow-2xl 
        overflow-y-auto max-h-[95vh]"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-14" />
        </div>

        {/* Reset Code Form */}
        <div className="text-center space-y-1">
          <h1 className="text-[22px] font-semibold text-white">
            Enter Reset Code
          </h1>
          <p className="text-[15px] text-[#EEEFF4]">
            A verification code has been sent to 86373743545
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 w-full max-w-md pt-6">
          <h2 className="text-xs text-[#EEEFF4] font-normal">Enter Code</h2>
          <Code
            length={6}
            value={otp}
            onChange={setOtp}
            containerClassName="grid grid-cols-6 gap-4 w-full"
            inputClassName="px-4 w-full h-[45px] md:h-[60px] text-center bg-[#FFFFFF] dark:bg-[#0D0D0D] border border-[#737791] rounded-md text-black dark:text-[#F2F2FE] focus:outline-none focus:ring-1 focus:ring-[#F5B97E]"
          />
        </div>

        <div className="flex pt-6 w-full max-w-md">
          <ActionButton
            label="Continue"
            labelClass="font-normal text-[12px] lg:text[16px]"
            buttonClass="text-[16px] h-[45px] w-full bg-[#EA7D00] text-white focus:outline-none focus:ring-0 hover:bg-[#cc6900] rounded-lg"
            onClick={() => navigate("/signup-login?tab=login")}
          />
        </div>

        <div className="pt-8">
          <span className="flex justify-center items-center w-full text-xs text-white">
            Not received verification code?{" "}
            <button
              className="text-white underline font-normal hover:text-[#cc6900] ml-1"
              onClick={() => console.log("Resend clicked")}
            >
              Resend
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
