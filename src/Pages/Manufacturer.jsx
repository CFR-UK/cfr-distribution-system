import { useModal } from "@/context/ModalContext";
import React, { useState, useEffect } from "react";
import RangeCalendar from "../components/RangeCalendar";
import ActionButton from "../components/ActionButton";
import { Skeleton } from "primereact/skeleton";
import ManufacturerData from "../components/ManufacturerData";
import AddManufacturerOrderModal from "../Modals/AddManufacturerOrderModal";

export default function Manufacturer() {
  const { openModal, closeModal } = useModal();

  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // show skeleton
    const timer = setTimeout(() => setIsLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, [key]);

  const createOrder = () => {
    openModal(AddManufacturerOrderModal, {
      sizeClass: "w-[85%] md:w-[60%]",
    });
  };

  return (
    <>
      {/* Main Dashboard */}
      <div className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]">
        {isLoading ? (
          <>
            <div className="flex flex-row justify-start items-center mb-4 gap-2">
              {/* Buttons Container */}
              <div className="flex flex-row justify-between items-center gap-2 md:gap-4 w-full md:w-[50%]">
                {/* RangeCalendar Skeleton */}
                <Skeleton
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] w-[70px]"
                />

                {/* Refresh Button Skeleton */}
                <Skeleton
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] w-[100px]"
                  style={{ borderRadius: "0.375rem" }}
                />

                {/* add customer Button Skeleton */}
                <Skeleton
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] w-[60px]"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
            </div>
            <ManufacturerData isLoading={true} key={key} />;
          </>
        ) : (
          <>
            {/* buttons */}
            <div className="flex flex-wrap justify-start items-center gap-4 w-full">
              {/* Create Order Button */}
              <ActionButton
                label="Create Order"
                icon="ic:round-add"
                iconPos="left"
                buttonClass="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
                iconClass="text-white dark:text-black w-4 md:w-6 h-4 md:h-6"
                onClick={createOrder}
              />
              <div className="w-auto h-[24px] xs:h-[30px] sm:h-[32px] md:h-[45px] flex items-center justify-center">
                {/* RangeCalendar */}
                <RangeCalendar
                  icon="quill:calendar"
                  placeholder="Select Date"
                />
              </div>

              {/* Refresh Button */}
              <ActionButton
                label="Refresh"
                icon="ic:round-refresh"
                iconPos="left"
                buttonClass="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-gray-50 text-[#EA7D00] dark:bg-[#141414] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
                iconClass="text-[#EA7D00] w-4 md:w-6 h-4 md:h-6"
                onClick={handleRefresh}
              />
            </div>

            {/* row 3 Table */}
            <ManufacturerData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
