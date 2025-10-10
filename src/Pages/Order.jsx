import React, { useState, useEffect, useRef, useMemo } from "react";
import RangeCalendar from "../components/RangeCalendar";
import ActionButton from "../components/ActionButton";
import MenuActionButton from "../components/MenuActionButton";
import { menuOptions } from "../Constant/menuOptions";
import { Skeleton } from "primereact/skeleton";
import FlexibleCard from "../components/FlexibleCard";
import { Icon } from "@iconify/react";
import PinWrapper from "../components/PinWrapper";
import OrderData from "../components/OrderData";
import { useModal } from "@/context/ModalContext";
import AddNewOrderModal from "../Modals/AddNewOrderModals";

export default function Order() {
  const { openModal, closeModal } = useModal();
  const exportMenuOptions = menuOptions();

  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const addNewOrder = () => {
    openModal(AddNewOrderModal, {
      sizeClass: "w-[85%] md:w-[60%]",
    });
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // show skeleton
    const timer = setTimeout(() => setIsLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, [key]);

  // Card Skeleton
  const CardsSkeleton = () => (
    <div className="grid grid-cols-5 gap-4 mt-4 justify-center">
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col w-full col-span-5 lg:col-span-1 h-[100px] bg-white dark:bg-black rounded-xl p-4 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
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
  const OrderCard = () => {
    return (
      <div className="grid grid-cols-5 gap-4 mt-4 justify-center">
        {/* card 1 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    Total Orders
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
        />
        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    Pending Orders
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    512
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="/PendingOrderIcon.png"
                    alt="Total SKUs"
                    width="56px"
                    height="55px"
                  />
                </div>
              </div>
            </>
          }
        />

        {/* card 3 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    In Transit Orders
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    512
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="/InTransitIcon.png"
                    alt="Total SKUs"
                    width="56px"
                    height="55px"
                  />
                </div>
              </div>
            </>
          }
        />

        {/* card 4 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    Cancelled Orders
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
        />

        {/* card 5 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 p-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[11px] whitespace-nowrap">
                    Completed Orders
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
              {/* Add new order skeleton */}
              <Skeleton
                width="120px"
                height="45px"
                borderRadius="8px"
                className="dark:bg-[#2C2C2CAA]"
              />

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

              {/* Export button skeleton */}
              <Skeleton
                width="110px"
                height="45px"
                borderRadius="8px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
            {/* card skeleton */}
            <CardsSkeleton />
            {/* order data */}
            <OrderData isLoading={true} key={key} />
          </>
        ) : (
          <>
            {/* buttons */}
            <div className="flex flex-wrap justify-start items-center gap-2 md:gap-4 w-full">
              {/* Add new order */}
              <ActionButton
                label="Add new order"
                icon="ic:round-add"
                iconPos="left"
                buttonClass="flex items-center justify-center gap-2 text-[7px] xs:text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
                iconClass="text-white dark:text-black w-3 xs:w-4 md:w-6 h-3 xs:h-4 md:h-6"
                onClick={addNewOrder}
              />

              <div className="w-auto h-[24px] xs:h-[30px] sm:h-[32px] md:h-[45px] flex items-center justify-center">
                {/* RangeCalendar */}
                <RangeCalendar
                  icon="quill:calendar"
                  placeholder="Select Date"
                  iconClasses="w-3 xs:w-4 md:w-6 h-3 xs:h-4 md:h-6"
                  buttonStyling="h-[30px] sm:h-[32px] md:h-[45px] w-auto text-[7px] sm:text-[10px] sm:text-[12px] md:text-sm px-3 md:px-4 rounded-md"
                />
              </div>

              {/* Refresh Button */}
              <ActionButton
                label="Refresh"
                icon="ic:round-refresh"
                iconPos="left"
                buttonClass="flex items-center justify-center gap-2 text-[7px] xs:text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-gray-50 text-[#EA7D00] dark:bg-[#141414] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
                iconClass="text-[#EA7D00] w-3 xs:w-4 md:w-6 h-3 xs:h-4 md:h-6"
                onClick={handleRefresh}
              />

              {/* Export Button */}
              <MenuActionButton
                label="Export"
                icon="famicons:cloud-download-outline"
                iconPos="left"
                menuOptions={exportMenuOptions}
                buttonClass="flex items-center justify-center gap-2 text-[7px] xs:text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-white text-black dark:bg-[#0D0D0D] dark:text-white border border-[#A9A9A9] dark:border-white focus:outline-none focus:ring-0"
                menuClass="mt-2 w-[110px] p-2 bg-white text-black dark:bg-[#0D0D0D] dark:text-white"
                iconClass="w-3 xs:w-4 md:w-6 h-3 xs:h-4 md:h-6"
              />
            </div>

            {/* row 2 */}
            <PinWrapper
              id="order-card"
              meta={{ component: OrderCard }}
              skeleton={<CardsSkeleton />}
            >
              <OrderCard />
            </PinWrapper>

            {/* row 3 Table */}
            <OrderData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
