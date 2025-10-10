import React, { useState, useEffect, useRef, useMemo } from "react";
import RangeCalendar from "../components/RangeCalendar";
import ActionButton from "../components/ActionButton";
import { menuOptions } from "../Constant/menuOptions";
import { Skeleton } from "primereact/skeleton";
import FlexibleCard from "../components/FlexibleCard";
import { Icon } from "@iconify/react";
import PinWrapper from "../components/PinWrapper";
import { useModal } from "@/context/ModalContext";
import ShopsData from "../components/ShopsData";

export default function Shops() {
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

  // Card Skeleton
  const ShopCardsSkeleton = () => (
    <div className="grid grid-cols-3 gap-4 mt-4 justify-center">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col w-full col-span-3 lg:col-span-1 h-[100px] bg-white dark:bg-black rounded-xl p-4 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
        >
          <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-2 w-full justify-between">
            {/* Left section: title + value */}
            <div className="flex flex-col gap-3">
              <Skeleton
                width="80px"
                height="11px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="60px"
                height="24px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>

            {/* Right section: icon */}
            <div className="pt-0">
              <Skeleton
                width="56px"
                height="55px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Order Cards
  const ShopsCard = () => {
    return (
      <div className="grid grid-cols-3 gap-4 mt-4 justify-center">
        {/* card 1 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-3 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    Total Shops
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    1,245
                  </h1>
                </div>
                <div className="items-center justify-center pt-2">
                  <img
                    src="/ShopIcon.png"
                    alt="Total SKUs"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </>
          }
        />
        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-3 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    Shop Place Orders
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    512
                  </h1>
                </div>
                <div className="items-center justify-center pt-2">
                  <img
                    src="/LocationIcon.png"
                    alt="Total SKUs"
                    width="35px"
                    height="45px"
                  />
                </div>
              </div>
            </>
          }
        />

        {/* card 3 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-3 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    Shop Not Place Order
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    512
                  </h1>
                </div>
                <div className="items-center justify-center pt-2">
                  <img
                    src="/ShopNotPlaceOrderIcon.png"
                    alt="Total SKUs"
                    width="40px"
                    height="45px"
                  />
                </div>
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
        {isLoading ? (
          <>
            {/* buttons skeleton */}
            <div className="flex flex-wrap justify-start items-center gap-2 md:gap-4 w-full">
              {/* RangeCalendar skeleton */}
              <Skeleton
                width="140px"
                height="45px"
                borderRadius="6px"
                className="dark:bg-[#2C2C2CAA]"
              />
              {/* Refresh button skeleton */}
              <Skeleton
                width="100px"
                height="45px"
                borderRadius="8px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
            {/* card skeleton */}
            <ShopCardsSkeleton />
            {/* order data */}
            <ShopsData isLoading={true} key={key} />
          </>
        ) : (
          <>
            {/* buttons */}
            <div className="flex flex-wrap justify-start items-center gap-2 md:gap-4 w-full">
              <div className="w-auto h-[32px] md:h-[45px] flex items-center justify-center">
                {/* RangeCalendar */}
                <RangeCalendar
                  icon="quill:calendar"
                  placeholder="Select Date"
                  iconClasses="w-3 xs:w-4 md:w-6 h-3 xs:h-4 md:h-6"
                  buttonStyling="h-[32px] md:h-[45px] w-auto text-[10px] sm:text-[12px] md:text-sm px-3 md:px-4 rounded-md"
                />
              </div>

              {/* Refresh Button */}
              <ActionButton
                label="Refresh"
                icon="ic:round-refresh"
                iconPos="left"
                buttonClass="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-sm h-[32px] md:h-[45px] w-auto bg-gray-50 text-[#EA7D00] dark:bg-[#141414] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
                iconClass="text-[#EA7D00] w-3 xs:w-4 md:w-6 h-3 xs:h-4 md:h-6"
                onClick={handleRefresh}
              />
            </div>

            {/* row 2 */}
            <PinWrapper
              id="shops-card"
              meta={{ component: ShopsCard }}
              skeleton={<ShopCardsSkeleton />}
            >
              <ShopsCard />
            </PinWrapper>

            {/* row 3 Table */}
            <ShopsData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
