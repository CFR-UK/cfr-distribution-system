import { Button } from "primereact/button";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

export default function MenuActionButton({
  label = "Click Me",
  icon = null,
  iconPos = "left",
  iconClass = "w-4 h-4 transition-all duration-300 ease-in-out",
  onClick = null,
  menuOptions = null, // expecting already formatted with template
  buttonClass = "p-button-sm p-button-outlined",
  menuClass = "",
  labelClass = "font-normal md:font-semibold",
}) {
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (menuOptions?.length) {
      setOpen((prev) => {
        const nextState = !prev;
        if (nextState) adjustMenuPosition();
        return nextState;
      });
    } else if (typeof onClick === "function") {
      onClick();
    }
  };

  const adjustMenuPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      if (window.innerWidth < 640) {
        // 📱 Small screen → left align
        setMenuStyle({
          position: "absolute",
          top: `${rect.height}px`,
          left: "0px",
        });
      } else {
        // 💻 Larger screen → right align
        setMenuStyle({
          position: "absolute",
          top: `${rect.height}px`,
          right: "0px",
        });
      }
    }
  };

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Recalculate position on resize
  useEffect(() => {
    if (open) {
      const handleResize = () => adjustMenuPosition();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [open]);

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <div ref={buttonRef}>
        <Button
          label={label}
          onClick={toggleMenu}
          className={`transition-all hover:shadow-lg dark:hover:[box-shadow:0_4px_12px_rgba(255,255,255,0.2)] px-3 md:px-4 ${buttonClass}`}
          pt={{
            label: { className: labelClass },
            root: { className: buttonClass },
          }}
          icon={() =>
            icon ? <Icon icon={icon} className={iconClass} /> : null
          }
          iconPos={iconPos}
        />
      </div>

      {/* Custom Menu */}
      {open && menuOptions?.length > 0 && (
        <div
          ref={menuRef}
          style={menuStyle}
          className={`mt-1 w-[104px] rounded-md shadow-lg bg-white dark:bg-[#1f1f1f] ring-1 ring-black ring-opacity-5 z-50 ${menuClass}`}
        >
          <ul className="py-1">
            {menuOptions.map((item, idx) => (
              <li key={idx} onClick={() => setOpen(false)}>
                {item.template(item)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
