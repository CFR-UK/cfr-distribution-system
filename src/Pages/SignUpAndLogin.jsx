import React, { useState, useEffect } from "react";
import FieldComponent from "../components/FieldComponent";
import ActionButton from "../components/ActionButton";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SignUpAndLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  // read ?tab=signup or ?tab=login
  const searchParams = new URLSearchParams(location.search);
  const initialTab = searchParams.get("tab") || "signup";

  const [activeTab, setActiveTab] = useState(initialTab);

  // keep tab updated when URL changes
  useEffect(() => {
    const newTab = new URLSearchParams(location.search).get("tab") || "signup";
    setActiveTab(newTab);
  }, [location.search]);

  // states for signup
  const [signupData, setSignupData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: true,
  });

  // states for login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target || e;
    setSignupData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target || e;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = () => console.log("Signup:", signupData);
  const handleLoginSubmit = () => {
    console.log("Login:", loginData);
    // Navigate to home page after successful login
    navigate("/");
  };

  // shared classes for inputs
  const inputClass =
    "text-[14px] w-full placeholder-[#737791] pl-3 border border-b border-[#73779140] h-[40px] rounded-lg text-black bg-white focus:outline-none focus:ring-1 focus:ring-[#F5B97E] hover:shadow-md transition-shadow duration-200";
  const labelClass = "text-[12px] text-[#EEEFF4]";
  const containerClass = "flex flex-col gap-1";

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
          rounded-3xl py-4 px-8 w-[95%] md:w-full max-w-lg shadow-2xl 
          overflow-y-auto max-h-[95vh]"
      >
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img src="/logo.png" alt="Logo" className="h-14" />
        </div>

        {/* Tabs */}
        <div className="flex bg-white/10 rounded-full overflow-hidden mb-2">
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
            <h2 className="text-white text-[18px] font-semibold text-center">
              Sign Up as a Distributor!
            </h2>
            <p className="text-gray-200 text-[12px] text-center mb-2">
              Get started with our platform in a few easy steps!
            </p>

            {/* Fields */}
            <div className="w-full space-y-3 mt-3">
              <FieldComponent
                type="text"
                name="email"
                label="Email Address"
                placeholder="Enter your email address"
                value={signupData.email}
                onChange={handleSignupChange}
                inputClass={inputClass}
                labelClass={labelClass}
                containerClass={containerClass}
              />
              <FieldComponent
                type="phone"
                name="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                value={signupData.phone}
                onChange={handleSignupChange}
                inputClass={inputClass}
                labelClass={labelClass}
                containerClass={containerClass}
              />
              <FieldComponent
                type="password"
                name="password"
                label="Password"
                placeholder="Create your password"
                value={signupData.password}
                onChange={handleSignupChange}
                inputClass={inputClass}
                labelClass={labelClass}
                containerClass={containerClass}
              />
              <FieldComponent
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Re-enter your password"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                inputClass={inputClass}
                labelClass={labelClass}
                containerClass={containerClass}
              />
            </div>

            {/* Terms */}
            <div className="flex justify-between items-center text-[12px] mt-3">
              <label className="flex items-center cursor-pointer text-[#EEEFF4]">
                <span
                  className={`relative w-4 h-4 border rounded-sm mr-2 flex items-center justify-center
          ${
            signupData.agree
              ? "bg-[#EA7D00] border-[#EA7D00]"
              : "bg-transparent border-[#737791]"
          }`}
                  onClick={() =>
                    setSignupData((prev) => ({ ...prev, agree: !prev.agree }))
                  }
                >
                  {signupData.agree && (
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
                I agree to the Terms & Conditions.
              </label>
            </div>

            <div className="flex mt-3">
              <ActionButton
                label="Create Account"
                labelClass="font-normal text-[12px] lg:text[16px]"
                buttonClass="text-[16px] h-[45px] w-full bg-[#EA7D00] text-white focus:outline-none focus:ring-0 hover:bg-[#cc6900] rounded-lg"
                onClick={() => navigate("/verify-code")}
              />
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
