import { useModal } from "@/context/ModalContext";
import React, { useState, useEffect, useRef, useMemo } from "react";
import RangeCalendar from "../components/RangeCalendar";
import ActionButton from "../components/ActionButton";
import { Skeleton } from "primereact/skeleton";
import FlexibleCard from "../components/FlexibleCard";
import MiniTrendArrowChart from "../components/Charts/MiniTrendArrowChart";
import PinWrapper from "../components/PinWrapper";
import { Icon } from "@iconify/react";
import SolidGaugeChart from "../components/Charts/SolidGaugeChart";
import CurveLineChart from "../components/Charts/CurveLineChart";
import InventoryData from "../components/InventoryData";
import AddStockModal from "../Modals/AddStockModal";

export default function Inventory() {
  const { openModal, closeModal } = useModal();

  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const AddStock = () => {
    openModal(AddStockModal, {
      sizeClass: "w-[85%] md:w-[55%]",
    });
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // show skeleton
    const timer = setTimeout(() => setIsLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, [key]);

  const CardsSkeleton = () => (
    <div className="grid grid-cols-12 gap-4 mt-4 justify-center">
      {/* card 1 skeleton */}
      <div className="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl">
        <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
          <Skeleton
            shape="circle"
            width="40px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="120px"
            height="12px"
            className="dark:bg-[#2C2C2CAA] mt-2"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4 mt-2">
          <div className="flex flex-col gap-2">
            <Skeleton
              width="80px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100px"
              height="10px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="65px"
            height="70px"
            className="dark:bg-[#2C2C2CAA] rounded-md"
          />
        </div>
      </div>

      {/* card 2 skeleton */}
      <div className="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl">
        <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
          <Skeleton
            shape="circle"
            width="40px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="120px"
            height="12px"
            className="dark:bg-[#2C2C2CAA] mt-2"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4 mt-2">
          <div className="flex flex-col gap-2">
            <Skeleton
              width="80px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100px"
              height="10px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="65px"
            height="70px"
            className="dark:bg-[#2C2C2CAA] rounded-md"
          />
        </div>
      </div>

      {/* card 3 skeleton */}
      <div className="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl">
        <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
          <Skeleton
            shape="circle"
            width="40px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="120px"
            height="12px"
            className="dark:bg-[#2C2C2CAA] mt-2"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4 mt-2">
          <div className="flex flex-col gap-2">
            <Skeleton
              width="80px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100px"
              height="10px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="65px"
            height="70px"
            className="dark:bg-[#2C2C2CAA] rounded-md"
          />
        </div>
      </div>

      {/* card 4 skeleton */}
      <div className="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl">
        <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
          <Skeleton
            shape="circle"
            width="40px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="120px"
            height="12px"
            className="dark:bg-[#2C2C2CAA] mt-2"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4 mt-2">
          <div className="flex flex-col gap-2">
            <Skeleton
              width="80px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100px"
              height="10px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="65px"
            height="70px"
            className="dark:bg-[#2C2C2CAA] rounded-md"
          />
        </div>
      </div>
    </div>
  );

  const InventoryCards = () => {
    return (
      <div className="grid grid-cols-12 gap-4 mt-4 justify-center">
        {/* card 1 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
                <button className="flex items-center justify-center w-[40px] h-[40px] bg-[#22C55E0F] rounded-md">
                  <Icon
                    icon="solar:dollar-broken"
                    width="20"
                    height="20"
                    className="text-[#22C55E]"
                  />
                </button>
                <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                  Total Inventory Value
                </h2>
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-extrabold text-[24px] text-[#151D48] dark:text-[#EEF1FF]">
                  £13.000
                </h1>
                <h2 className="text-[#00000066] text-[10px] dark:text-[#FFFFFFCC] whitespace-nowrap">
                  50% than last Week
                </h2>
              </div>
              <MiniTrendArrowChart data={[1, 3, 5, 5, 4, 7, 6, 8]} trend="up" />
            </div>
          }
        />
        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
                <button className="flex items-center justify-center w-[40px] h-[40px] bg-[#2291C50F] rounded-md">
                  <Icon
                    icon="fluent:box-20-regular"
                    width="20"
                    height="20"
                    className="text-[#2291C5]"
                  />
                </button>
                <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                  Number of Items
                </h2>
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-extrabold text-[24px] text-[#151D48] dark:text-[#EEF1FF]">
                  $13.000
                </h1>
                <h2 className="text-[#00000066] text-[10px] dark:text-[#FFFFFFCC] whitespace-nowrap">
                  50% out of 100%
                </h2>
              </div>
              <SolidGaugeChart
                value={72}
                centerText=""
                height="85"
                width="85"
                gradientColors={[
                  [0, "#95CAE3"],
                  [1, "#2291C5"],
                ]}
                valueStyle="font-size:14px; font-weight:bold; color:#2291C5;"
                textStyle=""
                outerRadius="100%"
                innerRadius="80%"
              />
            </div>
          }
        />

        {/* card 3 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
                <button className="flex items-center justify-center w-[40px] h-[40px] bg-[#C522250F] rounded-md">
                  <Icon
                    icon="weui:error-outlined"
                    width="20"
                    height="20"
                    className="text-[#C52225]"
                  />
                </button>
                <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                  Stock Out Rate
                </h2>
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-extrabold text-[24px] text-[#151D48] dark:text-[#EEF1FF]">
                  2%
                </h1>
                <h2 className="text-[#00000066] text-[10px] dark:text-[#FFFFFFCC] whitespace-nowrap">
                  50% Lower
                </h2>
              </div>
              <MiniTrendArrowChart data={[8, 6, 7, 4, 5, 3, 1]} trend="down" />
            </div>
          }
        />

        {/* card 4 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[182px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-col justify-between gap-2 pl-4 pt-4">
                <button className="flex items-center justify-center w-[40px] h-[40px] bg-[#C594220F] rounded-md">
                  <Icon
                    icon="ion:time-outline"
                    width="20"
                    height="20"
                    className="text-[#C59422]"
                  />
                </button>
                <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                  DOH(Days on hand)
                </h2>
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between items-center gap-4 pl-4 pr-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-extrabold text-[24px] text-[#151D48] dark:text-[#EEF1FF]">
                  1 Week
                </h1>
                <h2 className="text-[#00000066] text-[10px] dark:text-[#FFFFFFCC] whitespace-nowrap">
                  50% than last Week
                </h2>
              </div>
              <CurveLineChart
                data={[1, 3, 5, 2, 7]}
                color="#C59422"
                width={65}
                height={80}
              />
            </div>
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
              {/* Add stock skeleton */}
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
            </div>

            <div className="mt-4">
              <Skeleton
                width="150px"
                height="20px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>

            {/* card skeleton */}
            <CardsSkeleton />
            {/* order data */}
            <InventoryData isLoading={true} key={key} />
          </>
        ) : (
          <>
            {/* Row 1: Main Dashboard */}
            <div className="flex flex-row justify-between items-center mb-4 gap-2">
              {/* Buttons Container */}
              <div className="flex flex-wrap justify-start items-center gap-4 w-full">
                {/* Add Stock Button */}
                <ActionButton
                  label="Add Stock"
                  icon="ic:round-add"
                  iconPos="left"
                  buttonClass="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
                  iconClass="text-white dark:text-black w-4 md:w-6 h-4 md:h-6"
                  onClick={AddStock}
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
            </div>

            <div className="p-1">
              <p className="text-[#2B2B2B] dark:text-white text-[10px]">
                <span className="text-[#8E8E9C] text-[10px]">
                  Last Updated:{" "}
                </span>{" "}
                2024/11/24 | 14:30 PM
              </p>
            </div>

            {/* Row 2: Cards */}
            <PinWrapper
              id="inventory-card"
              meta={{ component: InventoryCards }}
              skeleton={<CardsSkeleton />}
            >
              <InventoryCards />
            </PinWrapper>

            {/* row 3 Table */}
            <InventoryData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
