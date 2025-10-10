import { Icon } from "@iconify/react";

export default function SearchBox({
  styling = "",
  placeholder = "Search...",
  onChange,
  containerClass = "",
}) {
  return (
    <div className={`relative ${containerClass}`}>
      <span className="absolute inset-y-0 left-3 flex items-center text-black dark:text-white">
        <Icon icon="mdi:magnify" className="text-xl text-[#EA7D00]" />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className={styling}
      />
    </div>
  );
}
