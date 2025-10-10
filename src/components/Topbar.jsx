import Logo from "./Logo";
import SearchBox from "./SearchBox";
import ThemeToggle from "./ThemeToggle";
import Notification from "./Notification";
import MessageIcon from "./MessageIcon";
import UserProfile from "./UserProfile";
import PinIcon from "./PinIcon";
import { Icon } from "@iconify/react";

const UserName = "Gul e hasnain";

export default function Topbar() {
  return (
    <div className="w-full bg-white dark:bg-[#000000] pl-2 pr-2">
      {/* XL and above: 1-row layout */}
      <div className="hidden xl:flex items-center h-[55px] w-full px-2">
        <div className="flex items-center gap-x-12">
          <Logo />
        </div>

        <div className="ml-10">
          <span className="text-[#151D48] text-md dark:text-white font-bold truncate pr-10">
            Good Morning, {UserName}
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center">
          <Icon icon="ic:sharp-circle" className="text-[#22C55E] w-2 h-2" />
          <p className="text-[#151D48CC] text-[14px] dark:text-white">Online</p>
        </div>

        <div className="flex items-center ml-auto">
          <div className="ml-4">
            <SearchBox
              styling="w-96 h-9 pl-10 pr-4 rounded-2xl text-sm bg-[#EA7D001A] dark:bg-[#EA7D0040] text-black dark:text-white border-none focus:outline-none"
              placeholder="Search orders, tasks, inventory, and more..."
            />
          </div>

          <div className="ml-4">
            <ThemeToggle
              size="w-16 h-9"
              iconLight="/moon.png"
              iconDark="/sun.png"
              mainStyling=""
              iconSize="w-6 h-6"
            />
          </div>

          <div className="ml-1.5">
            <PinIcon
              icon="solar:pin-linear"
              iconStyle="text-xl text-[#EA7D00]"
              showDot={true}
              dotStyling="bg-red-500 absolute top-1 left-[26px] block h-1.5 w-1.5 rounded-full"
              className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-9 h-9 rounded-xl flex items-center justify-center"
            />
          </div>

          <div className="ml-1.5">
            <Notification
              icon="carbon:notification"
              iconStyle="text-xl text-[#EA7D00]"
              showDot={true}
              dotStyling="bg-red-500 absolute top-1 left-[26px] block h-1.5 w-1.5 rounded-full"
              className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-9 h-9 rounded-xl flex items-center justify-center"
            />
          </div>

          <div className="ml-1.5">
            <MessageIcon
              icon="mdi-light:email"
              iconStyle="text-xl text-[#EA7D00]"
              showDot={true}
              dotStyling="bg-red-500 absolute top-1 left-[26px] block h-1.5 w-1.5 rounded-full"
              className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-9 h-9 rounded-xl flex items-center justify-center"
            />
          </div>

          <div className="">
            <UserProfile
              username="John Doe"
              view="Admin View"
              imgSrc="/profile.png"
              className="ml-4 gap-3"
            />
          </div>
        </div>
      </div>

      {/* SM only: 3-row layout */}
      <div className="block md:hidden w-full">
        {/* Row 1 */}
        <div className="flex items-center h-[55px] w-full px-3 bg-white dark:bg-black rounded-t-xl relative">
          {/* Left: Logo */}
          <Logo className="w-[50px]" />

          {/* Right: Icons + UserProfile */}
          <div className="flex items-center ml-auto gap-x-1">
            {/* Other icons grouped together */}
            <div className="flex gap-x-1">
              <ThemeToggle
                size="w-12 h-7"
                iconLight="/moon.png"
                iconDark="/sun.png"
                mainStyling="border-none rounded-full"
                iconSize="w-6 h-5"
                circleSize="1.4rem"
                translateLeft={{
                  light: "0.25rem",
                  dark: "calc(100% - 1.6rem)",
                }}
              />
              <PinIcon
                icon="solar:pin-linear"
                iconStyle="text-[16px] text-[#EA7D00]"
                showDot={true}
                dotStyling="bg-red-500 absolute top-1 right-1 block h-1 w-1 rounded-full"
                className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-7 h-7 rounded-lg flex items-center justify-center"
              />
              <Notification
                icon="carbon:notification"
                iconStyle="text-[16px] text-[#EA7D00]"
                showDot={true}
                dotStyling="bg-red-500 absolute top-1 right-1 block h-1 w-1 rounded-full"
                className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-7 h-7 rounded-lg flex items-center justify-center"
              />
              <MessageIcon
                icon="mdi-light:email"
                iconStyle="text-[16px] text-[#EA7D00]"
                showDot={true}
                dotStyling="bg-red-500 absolute top-1 right-1 block h-1 w-1 rounded-full"
                className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-7 h-7 rounded-lg flex items-center justify-center"
              />
            </div>

            {/* UserProfile separated to stick right */}
            <div className="ml-2 justify-end">
              <UserProfile
                imgSrc="/profile.png"
                className="w-7 h-7"
                avatarSize="small"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center px-3 py-2 bg-white dark:bg-black gap-3">
          {/* Left column: Greeting + Online */}
          <div className="flex flex-col gap-1">
            <span className="text-[#151D48] text-[11px] dark:text-white font-semibold truncate">
              Good Morning, {UserName}
            </span>
            <div className="flex items-center gap-1">
              <Icon icon="ic:sharp-circle" className="text-[#22C55E] w-2 h-2" />
              <p className="text-[#151D48CC] text-[8px] dark:text-white truncate">
                Online
              </p>
            </div>
          </div>

          {/* SearchBox takes remaining space */}
          <div className="flex-1">
            <SearchBox
              styling="w-full h-9 pl-10 pr-4 rounded-2xl text-sm bg-[#EA7D001A] dark:bg-[#EA7D0040] text-black dark:text-white border-none focus:outline-none truncate"
              placeholder="Search orders, tasks, inventory, and more..."
            />
          </div>
        </div>
      </div>

      {/* MD to LG only: 2-row layout */}
      <div className="hidden md:block xl:hidden w-full">
        {/* Row 1 */}
        <div className="flex items-center h-[55px] w-full px-3 bg-white dark:bg-black rounded-t-xl relative">
          {/* Left: Logo */}
          <Logo />

          {/* Right: Icons + UserProfile */}
          <div className="flex items-center ml-auto gap-x-3">
            {/* Other icons grouped together */}
            <div className="flex gap-x-3">
              <ThemeToggle
                size="w-16 h-9"
                iconLight="/moon.png"
                iconDark="/sun.png"
                mainStyling="border-none rounded-full"
                iconSize="w-6 h-5"
              />
              <PinIcon
                icon="solar:pin-linear"
                iconStyle="text-[16px] text-[#EA7D00]"
                showDot={true}
                dotStyling="bg-red-500 absolute top-1 left-[26px] block h-1.5 w-1.5 rounded-full"
                className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-9 h-9 rounded-lg flex items-center justify-center"
              />
              <Notification
                icon="carbon:notification"
                iconStyle="text-[16px] text-[#EA7D00]"
                showDot={true}
                dotStyling="bg-red-500 absolute top-1 left-[26px] block h-1.5 w-1.5 rounded-full"
                className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-9 h-9 rounded-lg flex items-center justify-center"
              />
              <MessageIcon
                icon="mdi-light:email"
                iconStyle="text-[16px] text-[#EA7D00]"
                showDot={true}
                dotStyling="bg-red-500 absolute top-1 left-[26px] block h-1.5 w-1.5 rounded-full"
                className="ml-2 bg-[#EA7D001A] dark:bg-[#EA7D0040] w-9 h-9 rounded-lg flex items-center justify-center"
              />
            </div>

            {/* UserProfile separated to stick right */}
            <div>
              <UserProfile
                username="John Doe"
                view="Admin View"
                imgSrc="/profile.png"
                className="ml-2 gap-3"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center px-3 py-2 bg-white dark:bg-black gap-3">
          {/* Left column: Greeting + Online */}
          <div className="flex flex-col gap-1">
            <span className="text-[#151D48] text-[14px] dark:text-white font-bold truncate">
              Good Morning, {UserName}
            </span>
            <div className="flex items-center gap-1">
              <Icon icon="ic:sharp-circle" className="text-[#22C55E] w-2 h-2" />
              <p className="text-[#151D48CC] text-[10px] dark:text-white truncate">
                Online
              </p>
            </div>
          </div>

          {/* SearchBox takes remaining space */}
          <div className="flex-1">
            <SearchBox
              styling="w-full h-9 pl-10 pr-4 rounded-2xl text-sm bg-[#EA7D001A] dark:bg-[#EA7D0040] text-black dark:text-white border-none focus:outline-none truncate"
              placeholder="Search orders, tasks, inventory, and more..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
