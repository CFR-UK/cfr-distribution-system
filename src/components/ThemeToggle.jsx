import { useTheme } from "../context/ThemeContext";
import { Icon } from "@iconify/react";

export default function ThemeToggle({
  size = "w-12 h-6", // width & height of the switch
  iconSize = "w-4 h-4", // size of the icon inside
  mainStyling = "",
  circleSize = "1.8rem", // diameter of the circle
  translateLeft = { light: "0.3rem", dark: "calc(100% - 2rem)" }, // position of circle
}) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`relative flex items-center cursor-pointer rounded-full ${size} ${mainStyling}`}
      onClick={() => toggleTheme()}
      style={{
        backgroundColor: darkMode ? "#EA7D0040" : "#EA7D001A",
        transition: "background-color 0.3s",
      }}
    >
      {/* Icon inside circle */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300"
        style={{
          left: darkMode ? translateLeft.dark : translateLeft.light,
          width: circleSize,
          height: circleSize,
          backgroundColor: darkMode ? "#000000" : "#FFFFFF",
        }}
      >
        <Icon
          icon={darkMode ? "akar-icons:moon-fill" : "mdi:white-balance-sunny"}
          width={parseInt(iconSize.split("w-")[1]) * 4 || 16}
          height={parseInt(iconSize.split("h-")[1]) * 4 || 16}
          color="#EA7D00"
        />
      </div>
    </div>
  );
}
