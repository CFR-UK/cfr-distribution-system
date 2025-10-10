import React, { useState } from "react";
import ActionButton from "../components/ActionButton";
import Code from "../components/Code"; // your OTP input
import FieldComponent from "../components/FieldComponent"; // your reusable field component
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function CodeVerification() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("signup");
  const [otp, setOtp] = useState("");

  // login fields state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = () => {
    console.log(loginData);
    // Navigate to home page after successful login
    navigate("/");
  };

  const inputClass =
    "text-[14px] w-full placeholder-[#737791] pl-3 border border-b border-[#73779140] h-[40px] rounded-lg text-black bg-white focus:outline-none focus:ring-1 focus:ring-[#F5B97E] hover:shadow-md transition-shadow duration-200";
  const labelClass = "text-[#EEEFF4] text-sm mb-1 block";
  const containerClass = "flex flex-col w-full";

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

        {/* Tabs */}
        <div className="flex bg-white/10 rounded-full overflow-hidden mb-6">
          <ActionButton
            label={
              <span className="flex items-center justify-center gap-2 font-normal">
                <Icon
                  icon="tabler:edit"
                  width={18}
                  height={18}
                  className={
                    activeTab === "signup" ? "text-[#2B2B2B]" : "text-white"
                  }
                />
                <span
                  className={
                    activeTab === "signup" ? "text-[#2B2B2B]" : "text-white"
                  }
                >
                  Signup
                </span>
              </span>
            }
            buttonClass={`flex-1 flex justify-center items-center gap-2 py-2 rounded-full ${
              activeTab === "signup"
                ? "bg-white text-[#2B2B2B]"
                : "bg-transparent text-white hover:bg-white/20"
            }`}
            onClick={() => setActiveTab("signup")}
          />
          <ActionButton
            label={
              <span className="flex items-center justify-center gap-2 font-normal">
                <Icon
                  icon="hugeicons:user-unlock-01"
                  width={18}
                  height={18}
                  className={
                    activeTab === "login" ? "text-[#2B2B2B]" : "text-white"
                  }
                />
                <span
                  className={
                    activeTab === "login" ? "text-[#2B2B2B]" : "text-white"
                  }
                >
                  Login
                </span>
              </span>
            }
            buttonClass={`flex-1 flex justify-center items-center gap-2 py-2 rounded-full ${
              activeTab === "login"
                ? "bg-white text-[#2B2B2B]"
                : "bg-transparent text-white hover:bg-white/20"
            }`}
            onClick={() => setActiveTab("login")}
          />
        </div>

        {activeTab === "signup" && (
          <>
            {/* Title & Message */}
            <div className="text-center space-y-1">
              <h1 className="text-[22px] font-semibold text-white">
                Verify Your Account
              </h1>
              <p className="text-[15px] text-[#EEEFF4]">
                A verification code has been sent to 86373743545
              </p>
            </div>

            {/* OTP */}
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

            {/* Button */}
            <div className="flex pt-6 w-full max-w-md">
              <ActionButton
                label="Create Account"
                labelClass="font-normal text-[12px] lg:text[16px]"
                buttonClass="text-[16px] h-[45px] w-full bg-[#EA7D00] text-white focus:outline-none focus:ring-0 hover:bg-[#cc6900] rounded-lg"
                onClick={() => setActiveTab("login")}
              />
            </div>

            {/* Resend Link */}
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
          </>
        )}

        {activeTab === "login" && (
          <>
            <h2 className="text-white pt-2 text-xl font-semibold text-center">
              Welcome Back, Distributer!
            </h2>

            {/* Fields */}
            <div className="w-full pt-4">
              <FieldComponent
                type="text"
                name="email"
                label="Email Address"
                placeholder="Enter your email address"
                value={loginData.email}
                onChange={handleLoginChange}
                inputClass={inputClass}
                labelClass={labelClass}
                containerClass={containerClass}
              />
            </div>

            <div className="w-full pt-4">
              <FieldComponent
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleLoginChange}
                inputClass={inputClass}
                labelClass={labelClass}
                containerClass={containerClass}
              />
            </div>

            {/* Remember me + Forget Password */}
            <div className="flex justify-between items-center text-[12px] pt-3 w-full">
              <label
                className="flex items-center cursor-pointer text-[#EEEFF4]"
                onClick={() =>
                  setLoginData((prev) => ({
                    ...prev,
                    rememberMe: !prev.rememberMe,
                  }))
                }
              >
                <span
                  className={`relative w-4 h-4 border rounded-sm mr-2 flex items-center justify-center
                    ${
                      loginData.rememberMe
                        ? "bg-[#EA7D00] border-[#EA7D00]"
                        : "bg-transparent border-[#737791]"
                    }`}
                >
                  {loginData.rememberMe && (
                    <svg
                      className="w-3 h-3 pointer-events-none"
                      fill="transparent"
                      stroke="white"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                Remember me
              </label>
              <button
                className="text-[#EA7D00] ml-1 hover:underline"
                onClick={() => navigate("/new-password")}
              >
                Forget Password?
              </button>
            </div>

            <div className="flex pt-3 w-full">
              <ActionButton
                label="Login"
                labelClass="font-normal text-[12px] lg:text[16px]"
                buttonClass="text-[16px] h-[45px] w-full bg-[#EA7D00] text-white focus:outline-none focus:ring-0 hover:bg-[#cc6900] rounded-lg"
                onClick={handleLoginSubmit}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
