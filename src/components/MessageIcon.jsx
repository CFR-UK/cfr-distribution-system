import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function MessageIcon({
  icon = "mdi-light:email",
  iconStyle = "",
  showDot = true,
  dotStyling = "!bg-red-900",
  className = "",
}) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/chat");
      }}
      className={`relative ${className}`}
    >
      <Icon icon={icon} className={iconStyle} />
      {showDot && <span className={dotStyling}></span>}
    </button>
  );
}
