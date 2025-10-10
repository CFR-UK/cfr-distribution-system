import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: "mdi:view-dashboard-outline", path: "/dashboard" },
  { name: "Orders", icon: "mdi:cart-outline", path: "/orders" },
  { name: "Inventory", icon: "mdi:clipboard-list-outline", path: "/inventory" },
  {
    name: "Manufacturer",
    icon: "mdi:briefcase-outline",
    path: "/manufacturer",
  },
  {
    name: "Order Takers",
    icon: "mdi:account-tie-outline",
    path: "/order-takers",
  },
  { name: "Shops", icon: "mdi:store-outline", path: "/shops" },
  {
    name: "Warehouse Logistics",
    icon: "mdi:truck-outline",
    path: "/warehouse",
  },
  { name: "Reports & Analytics", icon: "mdi:chart-line", path: "/reports" },
  { name: "Discount", icon: "mdi:tag-outline", path: "/discount" },
  { name: "Setting", icon: "mdi:tune", path: "/settings" },
  { name: "Logout", icon: "mdi:logout", path: "/welcome" },
];

export default function MainMenu() {
  return (
    <div
      className="h-screen w-screen overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/mainmenu.png')" }}
    >
      {/* Blur wrapper with scroll on small screens */}
      <div
        className="bg-gray-500/30 backdrop-blur-lg border border-gray-400/30 
             rounded-3xl py-6 px-6 w-[78%] md:w-full max-w-3xl shadow-2xl 
             overflow-y-auto max-h-[90vh]"
      >
        {/* Logo & Welcome */}
        <div className="mb-4">
          {/* Logo centered */}
          <div className="flex justify-center mb-2">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </div>

          {/* Text: center on small, left on md+ */}
          <div className="px-2 text-center md:text-left">
            <h2 className="text-white text-[20px] font-semibold flex items-center gap-2 justify-center md:justify-start">
              👋 Welcome, Akash!
            </h2>
            <p className="text-white text-[12px] md:text-[15px] mt-1 font-medium whitespace-nowrap">
              Manage your orders, shops, and products easily.
            </p>
          </div>
        </div>

        {/* Menu Grid: 2 per row on small, 4 per row on large */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {menuItems.map((item, idx) => (
            <MenuCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// 🔹 Menu Card
function MenuCard({ item }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(item.path)}
      className="flex flex-col items-center justify-center text-center
                 border border-white/40 rounded-2xl cursor-pointer 
                 hover:bg-white/10 transition-all w-[130px] md:w-[150px] h-[90px] md:h-[105px]
                 bg-transparent"
    >
      <Icon icon={item.icon} className="text-white text-3xl mb-2" />
      <span className="text-white text-[11px] font-medium flex items-center gap-1 justify-center">
        {item.name}
        <Icon
          icon="weui:arrow-outlined"
          className="text-white text-base w-4 h-4"
        />
      </span>
    </div>
  );
}
