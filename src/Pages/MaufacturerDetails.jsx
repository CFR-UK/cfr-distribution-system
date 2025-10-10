import { useModal } from "@/context/ModalContext";
import React, { useState, useEffect } from "react";
import RangeCalendar from "../components/RangeCalendar";
import ActionButton from "../components/ActionButton";
import { Skeleton } from "primereact/skeleton";
import { Icon } from "@iconify/react";
import ManufacturerDetailsData from "../components/ManufacturerDetailsData";
import { useNavigate } from "react-router-dom";
import EditManufacturerModal from "../Modals/EditManufacturerModal";

export default function ManufacturerDetails() {
  const { openModal, closeModal } = useModal();

  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const [isLoading, setIsLoading] = useState(true);

  const editManufaturer = () => {
    setTimeout(() => {
      openModal(EditManufacturerModal, {
        sizeClass: "w-[85%] md:w-[50%]",
      });
    }, 200);
  };

  useEffect(() => {
    setIsLoading(true); // show skeleton
    const timer = setTimeout(() => setIsLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <>
      {/* Main Inventory Dashboard */}
      <div className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]">
        {isLoading ? (
          <>
            <div className="flex flex-row justify-end lg:justify-between items-center mb-4 gap-2">
              {/* Title (Hidden below lg) */}
              <div className="hidden lg:block">
                <Skeleton
                  width="160px"
                  height="20px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              </div>

              {/* Buttons Container */}
              <div className="flex flex-row justify-between sitems-center gap-2 md:gap-4 w-full md:w-[50%]">
                {/* RangeCalendar Skeleton */}
                <Skeleton
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] w-[120px]"
                />

                {/* Refresh Button Skeleton */}
                <Skeleton
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] w-[100px]"
                  style={{ borderRadius: "0.375rem" }}
                />

                {/* export Button Skeleton */}
                <Skeleton
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] w-[120px]"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
            </div>
            {/* row-2 */}
            <div className="flex flex-col gap-4 mb-2 justify-between bg-white dark:bg-black rounded-lg p-6">
              <div className="flex flex-row justify-between gap-3 w-full">
                {/* Skeleton for Title */}
                <Skeleton
                  width="180px"
                  height="20px"
                  className="rounded dark:bg-[#2C2C2CAA]"
                />

                {/* Skeleton for Button */}
                <div className="flex items-center gap-2">
                  <Skeleton
                    width="60px"
                    height="28px"
                    className="rounded dark:bg-[#2C2C2CAA]"
                  />
                </div>
              </div>
              {/* Row 1 */}
              <div className="grid grid-cols-4 justify-between gap-4">
                <div className="flex flex-col col-span-1 gap-1">
                  <Skeleton
                    width="40%"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="80%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
                <div className="flex flex-col col-span-1 gap-1">
                  <Skeleton
                    width="40%"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="70%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
                <div className="flex flex-col col-span-1 gap-1">
                  <Skeleton
                    width="40%"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="90%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-4 justify-between gap-4">
                <div className="flex flex-col col-span-1 gap-1">
                  <Skeleton
                    width="40%"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="50%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
                <div className="flex flex-col col-span-1 gap-1">
                  <Skeleton
                    width="50%"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="60%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
                <div className="flex flex-col col-span-1 gap-1">
                  <Skeleton
                    width="60%"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="70%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-4 justify-between gap-4">
                <div className="flex flex-col col-span-1 gap-1">
                  <Skeleton
                    width="40%"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="80%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
              </div>
            </div>
            <ManufacturerDetailsData isLoading={true} key={key} />;
          </>
        ) : (
          <>
            {/* Row 1: Main Dashboard */}
            <div className="flex flex-row justify-between items-center mb-4 gap-2">
              {/* Title (Hidden below lg) */}
              {/* Back button */}
              <h1
                className="text-[#EA7D00] text-[14px] flex flex-row items-center gap-1 cursor-pointer"
                onClick={() => navigate(-1)} // 🔹 go one step back
              >
                <Icon icon="ion:arrow-back-outline" />
                Back
              </h1>

              {/* Buttons Container */}
              <div className="flex flex-wrap justify-end items-center gap-2 md:gap-4 w-full">
                {/* RangeCalendar */}
                <div className="w-auto h-[24px] xs:h-[30px] sm:h-[32px] md:h-[45px] flex items-center justify-center relative">
                  <RangeCalendar
                    icon="quill:calendar"
                    placeholder="Select Date"
                    iconClasses="w-5 h-5"
                    buttonStyling="h-[35px] md:h-[45px] w-auto text-[10px] md:text-[12px] px-4 rounded-md"
                    dropdownClass="
                    absolute right-0 mt-2
                    w-[340px] sm:w-[420px]
                    text-[8px] sm:text-xs overflow-hidden
                    translate-x-[100px] sm:translate-x-0
                    "
                  />
                </div>

                {/* Refresh Button */}
                <ActionButton
                  label="Refresh"
                  icon="ic:round-refresh"
                  iconPos="left"
                  iconClass="w-5 h-5"
                  buttonClass="flex items-center justify-center gap-2 text-[10px] md:text-[12px] h-[35px] md:h-[45px] w-auto px-2 md:px-4 bg-gray-50 dark:bg-[#141414] text-[#EA7D00] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
                  onClick={handleRefresh}
                />
              </div>
            </div>
            {/* Row 2: Cards */}
            <div className="flex flex-col gap-4 mb-2 justify-between bg-white dark:bg-black rounded-lg p-6 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]">
              <div className="flex flex-row justify-between  gap-3 w-full">
                <h1 className="text-[15px] md:text-[18px] text-[#333333] dark:text-[#F2F2FE] font-extrabold">
                  Manufacturer
                </h1>
                <button
                  onClick={editManufaturer}
                  type="button"
                  className="flex items-center gap-2 bg-white dark:bg-black text-[#CC6600] dark:text-[#CC6600] border border-[#CC6600] dark:border-[#CC6600] px-3 py-1 rounded text-[11px] font-medium"
                >
                  <Icon icon="tabler:edit" width={14} height={14} /> Edit
                </button>
              </div>
              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col col-span-1  gap-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Manufacturer Name
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Shraiy Gupta
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Mobile Number
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    +91 5435345
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Email Address
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    shraiy@gmail.com
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Contact Person
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Mr. Thomas Balazs
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Payment Terms
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    7 Days
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Bank Transfer
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Metro
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Currency
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Euro
                  </p>
                </div>
                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Address
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Noida, India
                  </p>
                </div>
              </div>
            </div>

            {/* row 3 Table */}
            <ManufacturerDetailsData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
