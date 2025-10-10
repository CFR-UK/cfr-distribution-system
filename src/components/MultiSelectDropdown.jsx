import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const members = ["Ajay", "Sana", "Ali", "John", "Sara"];

export default function CustomMultiSelect({
  label = "Assign To",
  value,
  onChange,
}) {
  // if parent supplies value/onChange we use those, else we use our own state
  const [internalSelected, setInternalSelected] = useState([]);
  const selected = value !== undefined ? value : internalSelected;
  const setSelected = onChange !== undefined ? onChange : setInternalSelected;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleChange = (member) => {
    setSelected((prev) =>
      prev.includes(member)
        ? prev.filter((m) => m !== member)
        : [...prev, member]
    );
  };

  const removeMember = (member) => {
    setSelected((prev) => prev.filter((m) => m !== member));
  };

  return (
    <div className="w-full relative pl-1">
      <label className="block text-[12px] text-[#737791] dark:text-[#A9A9CD] mb-1">
        {label}
      </label>

      {/* Trigger */}
      <div
        ref={triggerRef}
        className="flex items-center justify-between w-full h-[40px] border border-[#73779140] dark:border-[#A9A9CD] rounded-lg px-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#B9B9FB] hover:shadow-md transition-shadow duration-200 dark:hover:[box-shadow:0_3px_10px_rgba(255,255,255,0.2)] dark:bg-[#0D0D0D] cursor-pointer bg-white"
        onClick={toggleDropdown}
      >
        <span className="!text-[#737791] dark:!text-[#A9A9CD] text-[14px]">
          {selected.length === 0 ? "Select member" : "Select member"}
        </span>
        <Icon
          icon="mdi:chevron-down"
          className="text-[#737791] dark:text-[#A9A9CD] text-base"
        />
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute w-full mt-1 border border-[#73779140] dark:border-[#A9A9CD] rounded shadow-sm bg-white dark:bg-[#0D0D0D] z-50 max-h-48 overflow-auto"
        >
          {members.map((member) => (
            <div
              key={member}
              className="flex items-center gap-2 px-3 py-2 hover:bg-[#EA7D001A] dark:hover:bg-[#EA7D0040] text-[#737791] dark:text-[#A9A9CD] cursor-pointer text-sm"
              onClick={() => handleChange(member)}
            >
              {/* Custom Checkbox */}
              <div
                className={`w-4 h-4 flex items-center justify-center rounded-sm cursor-pointer transition-colors
                  border ${
                    selected.includes(member)
                      ? "bg-[#EA7D00] border-[#EA7D00]"
                      : "bg-white border-[#73779180]"
                  }
                  dark:${
                    selected.includes(member)
                      ? "bg-[#EA7D00] border-[#EA7D00]"
                      : "bg-[#0D0D0D] border-[#A9A9CD]"
                  }
                `}
              >
                {selected.includes(member) && (
                  <Icon icon="mdi:check" className="text-white text-[14px]" />
                )}
              </div>

              <span>{member}</span>
            </div>
          ))}
        </div>
      )}

      {/* Selected tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {selected.map((member, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F5FF] dark:bg-[#EA7D001A] text-[#EA7D00] text-sm"
          >
            {member}
            <button
              onClick={() => removeMember(member)}
              className="text-xs font-bold hover:text-red-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
