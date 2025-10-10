import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const menuItems = [
  {
    name: "Dashboard",
    icon: "mdi:view-dashboard-outline",
    path: "/dashboard",
    key: "dashboard",
  },
  { name: "Orders", icon: "mdi:cart-outline", path: "/orders", key: "orders" },
  {
    name: "Inventory",
    icon: "mdi:clipboard-list-outline",
    path: "/inventory",
    key: "inventory",
  },
  {
    name: "Manufacturer",
    icon: "mdi:briefcase-outline",
    path: "/manufacturer",
    key: "manufacturer",
  },
  {
    name: "Order Takers",
    icon: "mdi:account-tie-outline",
    path: "/order-takers",
    key: "orderTakers",
  },
  { name: "Shops", icon: "mdi:store-outline", path: "/shops", key: "shops" },
  {
    name: "Warehouse",
    icon: "mdi:truck-outline",
    path: "/warehouse",
    key: "warehouse",
  },
  { name: "Reports", icon: "mdi:chart-line", path: "/reports", key: "reports" },
  {
    name: "Discount",
    icon: "mdi:tag-outline",
    path: "/discount",
    key: "discount",
  },
  {
    name: "Settings",
    icon: "mdi:tune",
    path: "/settings",
    key: "settings",
  },
  {
    name: "Chat",
    icon: "mdi:chat-outline",
    path: "/chat",
    key: "chat",
    hasNotification: true,
    notificationCount: 5,
  },
];

export default function TopBarMenu() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the scrollable container (the div with overflow-auto in MainLayout)
      const scrollContainer = document.querySelector(".overflow-auto");
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        setIsScrolled(scrollTop > 10);
      }
    };

    // Find the scrollable container and add event listener
    const scrollContainer = document.querySelector(".overflow-auto");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const getActiveKey = (pathname) => {
    // custom grouping rules if needed
    if (pathname.startsWith("/logistic")) return "logistics";
    if (pathname.startsWith("/manufacturer")) return "manufacturer";
    if (pathname.startsWith("/order-takers")) return "orderTakers";
    if (pathname.startsWith("/order")) return "orders";
    if (pathname.startsWith("/shop")) return "shops";
    if (pathname.startsWith("/Discount")) return "discount";
    if (pathname.startsWith("/add-discount")) return "discount";
    if (pathname.startsWith("/view-report")) return "reports";
    if (
      pathname.startsWith("/lowstock") ||
      pathname.startsWith("/outofstock") ||
      pathname.startsWith("/nearexpiry")
    )
      return "productManagement";

    // default: longest prefix match
    const candidates = menuItems
      .filter((m) => m.path)
      .filter(
        (m) =>
          pathname === m.path ||
          pathname.startsWith(m.path + "/") ||
          pathname.startsWith(m.path)
      )
      .sort((a, b) => b.path.length - a.path.length);

    return candidates.length ? candidates[0].key : "dashboard";
  };

  const activeKey = getActiveKey(pathname);

  return (
    <div
      className={`w-full overflow-x-auto whitespace-nowrap scrollbar-hide bg-[#F9FAFB] dark:bg-[#141414] transition-all duration-300 ${
        isScrolled ? "py-2 px-2" : "py-4 px-4"
      }`}
    >
      <div className="flex justify-between gap-3">
        {menuItems.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={`
                  flex flex-col items-center justify-center rounded-xl shrink-0 cursor-pointer transition-all duration-300
                  ${
                    isScrolled
                      ? "w-[85px] h-[65px]"
                      : "w-[100px] md:w-[110px] h-[95px] md:h-[105px]"
                  }
                ${
                  isActive
                    ? "text-[#EA7D00] border border-[#EA7D00] bg-white dark:bg-[#141414]"
                    : "text-[#737791] dark:text-white border border-[#737791] dark:border-white bg-white dark:bg-[#141414]"
                }
                hover:shadow-md dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:text-[#EA7D00CC] hover:border hover:border-[#EA7D00CC] dark:hover:text-[#EA7D00CC] dark:hover:border dark:hover:border-[#EA7D00CC]
              `}
            >
              <div className="relative">
                <Icon
                  icon={item.icon}
                  className={`mb-2 transition-all duration-300 ${
                    isScrolled
                      ? "text-[16px] md:text-[18px]"
                      : "text-[22px] md:text-[28px]"
                  }`}
                />
                {item.hasNotification && item.notificationCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-bold">
                    {item.notificationCount > 99
                      ? "99+"
                      : item.notificationCount}
                  </div>
                )}
              </div>
              <span
                className={`font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-[10px] md:text-[11px]"
                    : "text-[12px] md:text-[14px]"
                }`}
              >
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
