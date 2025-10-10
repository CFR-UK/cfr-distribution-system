import { useNavigate } from "react-router-dom";
import { useModal } from "@/context/ModalContext";
import React, { useState, useEffect } from "react";
import ActionButton from "../components/ActionButton";
import { Skeleton } from "primereact/skeleton";
import { menuOptions } from "../Constant/menuOptions";
import { Icon } from "@iconify/react";
import FlexibleCard from "../components/FlexibleCard";
import OrderTakerDetailData from "../components/OrderTakerDetailData";

export default function OrderTakerDetail() {
  const { openModal, closeModal } = useModal();

  const [key, setKey] = useState(0);
  const exportMenuOptions = menuOptions();
  const navigate = useNavigate();

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [key]);

  const OrderTakerDetailCard = () => {
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
                    Total Orders Taken
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    512
                  </h1>
                </div>
                <div className="items-center justify-center pt-2">
                  <img
                    src="/TotalOrderTakenIcon.png"
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
                    Active Orders
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    1,245
                  </h1>
                </div>
                <div className="items-center justify-center pt-2">
                  <img
                    src="/ActiveOrdersIcon.png"
                    alt="Total SKUs"
                    width="50px"
                    height="50px"
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
                    Total Shops Registered
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    512
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
      </div>
    );
  };

  return (
    <>
      {/* Main ordertaker details  */}
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
              <div className="flex flex-row justify-end items-center gap-2 md:gap-4 w-full md:w-[50%]">
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
            </div>
            {/* row 3 */}
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
            <OrderTakerDetailData isLoading={true} key={key} />;
          </>
        ) : (
          <>
            {/* Row 1: Main Dashboard */}
            <div className="flex flex-row justify-between items-center mb-4 gap-2">
              {/* Back button */}
              <h1
                className="text-[#EA7D00] text-[14px] flex flex-row items-center gap-1 cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <Icon icon="ion:arrow-back-outline" />
                Back
              </h1>

              {/* Buttons Container */}
              <div className="flex flex-wrap justify-end items-center gap-2 md:gap-4 w-full">
                {/* Refresh Button */}
                <ActionButton
                  label="Refresh"
                  icon="ic:round-refresh"
                  iconPos="left"
                  iconClass="w-5 h-5"
                  buttonClass="flex items-center justify-center gap-2 text-[10px] md:text-[12px] h-[35px] md:h-[45px] w-auto px-2 md:px-4 bg-gray-50 dark:bg-[#141414] text-[#EA7D00] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
                  onClick={handleRefresh}
                />
                {/* message button */}
                <ActionButton
                  label="Message"
                  icon="mdi-light:email"
                  iconPos="left"
                  iconClass="w-5 h-5"
                  buttonClass="flex items-center justify-center gap-2 text-[10px] md:text-[12px] h-[35px] md:h-[45px] w-auto px-2 md:px-4 bg-[#EA7D00] dark:bg-[#EA7D00] text-white dark:text-black border-none focus:outline-none focus:ring-0"
                  //   onClick={}
                />
              </div>
            </div>

            {/* Row 2: Cards */}
            <div className="flex flex-col gap-4 mb-2 justify-between bg-white dark:bg-black rounded-lg p-6 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]">
              <div className="flex flex-row justify-between  gap-3 w-full">
                <h1 className="text-[15px] md:text-[18px] text-[#333333] dark:text-[#F2F2FE] font-extrabold">
                  Order Taker
                </h1>
              </div>
              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col col-span-1  gap-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Name
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
            </div>

            {/* row 3 */}
            <OrderTakerDetailCard />

            {/* row 4 Table */}
            <OrderTakerDetailData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
