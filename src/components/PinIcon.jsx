import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PinIcon({
  icon = "solar:pin-linear",
  iconStyle = "",
  showDot = true,
  dotStyling = "!bg-red-900",
  className = "",
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === "/pinsection";

  return (
    <button
      onClick={() => {
        navigate("/pinsection");
      }}
      className={`relative flex items-center justify-center rounded-full p-2 transition-colors
        ${isActive ? "bg-[#EA7D00] dark:bg-[#EA7D00]" : ""}
        ${className}`}
    >
      <Icon
        icon={icon}
        className={`${iconStyle} ${isActive ? "text-white" : ""}`}
      />
      {showDot && (
        <span
          className={`absolute top-1 right-1 block h-1.5 w-1.5 rounded-full 
            ${isActive ? "bg-white" : dotStyling}`}
        ></span>
      )}
    </button>
  );
}
