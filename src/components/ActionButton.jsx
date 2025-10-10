import { Button } from "primereact/button";
import { Icon } from "@iconify/react";

export default function ActionButton({
  label = "Click Me",
  icon = null,
  iconPos = "left",
  iconClass = "w-4 h-4 transition-all duration-300 ease-in-out",
  onClick = null,
  buttonClass = "p-button-sm p-button-outlined",
  labelClass = "font-normal md:font-semibold",
}) {
  return (
    <Button
      label={label}
      onClick={onClick}
      className={`transition-all hover:shadow-lg dark:hover:[box-shadow:0_4px_12px_rgba(255,255,255,0.2)] px-3 md:px-4 ${buttonClass}`}
      pt={{
        label: { className: labelClass },
        root: { className: buttonClass },
      }}
      icon={() => (icon ? <Icon icon={icon} className={iconClass} /> : null)}
      iconPos={iconPos}
    />
  );
}
