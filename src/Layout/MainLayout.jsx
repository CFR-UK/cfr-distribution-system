import { Outlet, useLocation } from "react-router-dom";
import Topbar from "../Components/Topbar";
import TopBarMenu from "../Components/TopBarMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col">
      {/* Topbar stays fixed */}
      <Topbar />
      <TopBarMenu />

      {/* Animated Page Content */}
      <div className="flex-1 bg-gray-50 dark:bg-[#141414] overflow-auto scrollbar-thin scrollbar-thumb-[#8E8E9C2E] scrollbar-track-[#F2F2FE] dark:scrollbar-thumb-[#8E8E9C2E] dark:scrollbar-track-[#141414]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center bg-white dark:bg-black p-1">
        <p className="text-[#151D48] dark:text-white text-[14px]">
          @2025 All Rights Reserved
        </p>
      </div>
    </div>
  );
}
