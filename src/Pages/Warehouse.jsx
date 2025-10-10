import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useModal } from "@/context/ModalContext";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef, useMemo } from "react";
import ActionButton from "../components/ActionButton";
import { menuOptions } from "../Constant/menuOptions";
import { Icon } from "@iconify/react";
import { Skeleton } from "primereact/skeleton";
import FlexibleCard from "../components/FlexibleCard";
import MenuActionButton from "../components/MenuActionButton";
import RangeCalendar from "../components/RangeCalendar";
import WarehouseData from "../components/WarehouseData";
import PinWrapper from "../components/PinWrapper";

export default function Warehouse() {
  const { openModal, closeModal } = useModal();
  const exportMenuOptions = menuOptions();

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

  const WarehouseCardSkeleton = () => (
    <div className="grid grid-cols-12 gap-4 mb-2 justify-center pt-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[120px] bg-white dark:bg-black rounded-xl"
        >
          {/* Card Header */}
          <div className="flex flex-row gap-2 p-4 w-full justify-between">
            <div className="flex flex-col gap-3">
              <Skeleton
                width="80px"
                height="12px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="60px"
                height="20px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
            <Skeleton
              width="56px"
              height="55px"
              className="rounded-md dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Card Center */}
          <div className="px-4 pb-4">
            {/* Text */}
            <Skeleton
              width="100%"
              height="10px"
              className="mb-1 dark:bg-[#2C2C2CAA]"
            />
            {/* Progress Bar */}
            {i === 0 && (
              <Skeleton
                width="100%"
                height="5px"
                className="rounded-full dark:bg-[#2C2C2CAA]"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const WarehouseCard = () => {
    return (
      <div className="grid grid-cols-12 gap-4 mb-2 justify-center pt-4">
        {/* card 1 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Total Delivery
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    1,245
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="/TotalSKUIcon.png"
                    alt="Total SKUs"
                    width="56px"
                    height="55px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <div className="w-full pl-4 pr-4 pb-4">
              {/* Text */}
              <p className="text-[8px] font-normal text-[#A9A9CD] mb-1">
                780/1,000 Completed Today
              </p>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-[5px]">
                <div
                  className="bg-[#0CB91D] dark:bg-[#0DD121] h-[5px] rounded-full transition-all duration-300"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          }
        />
        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    In Transit
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    512
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="InTransitIcon.png"
                    alt="Total SKUs"
                    width="56px"
                    height="55px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <>
              <div className="text-[10px] pl-4 pr-4 pb-4">
                <h1 className="text-[#00000066] dark:text-[#999999]">
                  <span className="text-[#0CB91D]">95%</span> On-Time Deliveries
                </h1>
              </div>
            </>
          }
        />

        {/* card 3 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Delivery Delayed
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    78
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="/DeliveryDelayedIcon.png"
                    alt="Total SKUs"
                    width="56px"
                    height="55px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <>
              <div className="text-[10px] pl-4 pr-4 pb-4">
                <h1 className="text-[#00000066] dark:text-[#999999]">
                  Average delay: <span className="text-[#EF4444]">30 mins</span>
                </h1>
              </div>
            </>
          }
        />

        {/* card 4 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Delivery Success
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    92%
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="/DeliverySuccessIcon.png"
                    alt="Total SKUs"
                    width="56px"
                    height="55px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <>
              <div className="text-[10px] pl-4 pr-4 pb-4">
                <h1 className="text-[#00000066] dark:text-[#999999]">
                  <span className="text-[#0CB91D]">Goal: </span> 95% Success
                  Rate
                </h1>
              </div>
            </>
          }
        />
      </div>
    );
  };

  return (
    <>
      {/* Main Inventory Dashboard */}
      <div className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]">
        {/* Row 1: Main Dashboard */}
        {isLoading ? (
          <>
            {/* Row 1: Header + Buttons */}
            <div className="flex flex-row justify-start items-center gap-4 w-full">
              {/* RangeCalendar Skeleton */}
              <Skeleton
                width="140px"
                height="45px"
                borderRadius="8px"
                className="dark:bg-[#2C2C2CAA]"
              />

              {/* Refresh Button Skeleton */}
              <Skeleton
                width="100px"
                height="45px"
                borderRadius="8px"
                className="dark:bg-[#2C2C2CAA]"
              />

              {/* Export Button Skeleton */}
              <Skeleton
                width="100px"
                height="45px"
                borderRadius="8px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
            {/* Row 2: KPI Cards */}
            <WarehouseCardSkeleton />
            {/* row 3 Table */}
            <WarehouseData isLoading={true} key={key} />;
          </>
        ) : (
          <>
            <div className="flex flex-wrap justify-start items-center gap-4 w-full">
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

              {/* Export Button */}
              <MenuActionButton
                label="Export"
                icon="famicons:cloud-download-outline"
                iconPos="left"
                menuOptions={exportMenuOptions}
                buttonClass="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-white text-black dark:bg-[#0D0D0D] dark:text-white border border-[#A9A9A9] dark:border-white focus:outline-none focus:ring-0"
                menuClass="mt-2 w-[110px] p-2 bg-white text-black dark:bg-[#0D0D0D] dark:text-white"
                iconClass="w-4 md:w-6 h-4 md:h-6"
              />
            </div>

            {/* Row 2: Cards */}
            <PinWrapper
              id="warehouse-card"
              meta={{ component: WarehouseCard }}
              skeleton={<WarehouseCardSkeleton />}
            >
              <WarehouseCard />
            </PinWrapper>
            {/* row 3 Table */}
            <WarehouseData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
