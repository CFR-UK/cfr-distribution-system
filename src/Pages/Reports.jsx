import React, { useState, useEffect, useRef, useMemo } from "react";
import RangeCalendar from "../components/RangeCalendar";
import ActionButton from "../components/ActionButton";
import MenuActionButton from "../components/MenuActionButton";
import { menuOptions } from "../Constant/menuOptions";
import { Skeleton } from "primereact/skeleton";
import FlexibleCard from "../components/FlexibleCard";
import { Icon } from "@iconify/react";
import PinWrapper from "../components/PinWrapper";
import { useModal } from "@/context/ModalContext";
import ReportData from "../components/ReportData";
import GenerateReportModal from "../Modals/GenerateReportModal";

export default function Reports() {
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

  const generateReport = () => {
    openModal(GenerateReportModal, {
      sizeClass: "w-[85%] md:w-[50%]",
    });
  };

  const ReportCardSkeleton = () => {
    return (
      <div className="grid grid-cols-5 gap-4 mb-2 justify-center pt-4">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full col-span-5 lg:col-span-1 h-[120px] bg-white dark:bg-black rounded-xl p-4"
          >
            {/* Header */}
            <div className="flex flex-row gap-2 w-full justify-between">
              <div className="flex flex-col gap-3">
                <Skeleton
                  width="60px"
                  height="12px"
                  className="dark:bg-[#2C2C2CAA]"
                />
                <Skeleton
                  width="80px"
                  height="24px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              </div>
              <Skeleton
                width="50px"
                height="50px"
                className="dark:bg-[#2C2C2CAA] rounded-full"
              />
            </div>

            {/* Center */}
            <div className="pt-4">
              <Skeleton
                width="100px"
                height="12px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ReportCards = () => {
    return (
      <div className="grid grid-cols-5 gap-4 mb-2 justify-center pt-4">
        {/* card 1 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Total Revenue
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    $1,245
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="TotalReportIcon.png"
                    alt="Total SKUs"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <div className="pl-4 pr-4 pb-2">
              <h2 className="flex flex-row gap-1 text-[#2B2B2B] dark:text-[#D4D4D4] font-light text-[10px]">
                <span className="text-[#0CB91D]">
                  <Icon
                    icon="clarity:arrow-line"
                    width="12"
                    height="14"
                    className="text-"
                  />
                </span>
                2% more than year
              </h2>
            </div>
          }
        />
        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Total Sales
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    $512
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="TotalSaleReportIcon.png"
                    alt="Total SKUs"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <div className="pl-4 pr-4 pb-2">
              <h2 className="flex flex-row gap-1 text-[#2B2B2B] dark:text-[#D4D4D4] font-light text-[10px]">
                <span className="text-[#EF4444]">
                  <Icon
                    icon="solar:arrow-down-linear"
                    width="12"
                    height="14"
                    className="text-"
                  />
                </span>
                2% less than last year
              </h2>
            </div>
          }
        />

        {/* card 3 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Order Completed
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    34
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="/TotalSKUIconReport.png"
                    alt="Total SKUs"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <div className="pl-4 pr-4 pb-2">
              <h2 className="flex flex-row gap-1 text-[#2B2B2B] dark:text-[#D4D4D4] font-light text-[10px]">
                <span className="text-[#EF4444]">
                  <Icon
                    icon="solar:arrow-down-linear"
                    width="12"
                    height="14"
                    className="text-"
                  />
                </span>
                2% less than last year
              </h2>
            </div>
          }
        />

        {/* card 4 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Inventory Turnover
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    65%
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="InventoryTurnOverReportIcon.png"
                    alt="Total SKUs"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <div className="pl-4 pr-4 pb-2">
              <h2 className="flex flex-row gap-1 text-[#2B2B2B] dark:text-[#D4D4D4] font-light text-[10px]">
                <span className="text-[#0CB91D]">
                  <Icon
                    icon="clarity:arrow-line"
                    width="12"
                    height="14"
                    className="text-"
                  />
                </span>
                2% more than year
              </h2>
            </div>
          }
        />

        {/* card 5 */}
        <FlexibleCard
          cardClass="flex flex-col w-full col-span-5 lg:col-span-1 h-[120px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=""
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                    Pending Shipments
                  </h2>
                  <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                    92%
                  </h1>
                </div>
                <div className="pt-2">
                  <img
                    src="PendindShipmentReportIcon.png"
                    alt="Total SKUs"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </>
          }
          center={
            <div className="pl-4 pr-4 pb-2">
              <h2 className="flex flex-row gap-1 text-[#2B2B2B] dark:text-[#D4D4D4] font-light text-[10px]">
                <span className="text-[#0CB91D]">
                  <Icon
                    icon="clarity:arrow-line"
                    width="12"
                    height="14"
                    className="text-"
                  />
                </span>
                2% more than year
              </h2>
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
        {/* Row 1: Main Dashboard */}
        {isLoading ? (
          <>
            {/* Row 1: Title + Buttons */}
            <div className="flex flex-row justify-between items-center mb-4 gap-2">
              {/* Buttons Container */}
              <div className="flex flex-row justify-start items-center gap-1 sm:gap-4 w-full">
                {/* Export Button */}
                <Skeleton
                  width="104px"
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] rounded-md"
                />
                {/* RangeCalendar */}
                <Skeleton
                  width="120px"
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] rounded-md"
                />
                {/* Refresh Button */}
                <Skeleton
                  width="126px"
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] rounded-md"
                />
                {/* Generate Report Button */}
                <Skeleton
                  width="180px"
                  height="45px"
                  className="dark:bg-[#2C2C2CAA] rounded-md"
                />
              </div>
            </div>
            {/* Row 2: Cards */}
            <ReportCardSkeleton />
            <ReportData isLoading={true} key={key} />;
          </>
        ) : (
          <>
            <div className="flex flex-row justify-between items-center mb-4 gap-2">
              {/* Buttons Container */}
              <div className="flex flex-wrap justify-start items-center gap-2 md:gap-4 w-full">
                {/* generate report */}
                <ActionButton
                  label="Generate Report"
                  icon="ic:round-add"
                  iconPos="left"
                  buttonClass="flex items-center justify-center gap-2 text-[7px] xs:text-[10px] sm:text-[12px] md:text-sm h-[30px] sm:h-[32px] md:h-[45px] w-auto bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
                  iconClass="text-white dark:text-black w-3 xs:w-4 md:w-6 h-3 xs:h-4 md:h-6"
                  onClick={generateReport}
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
            </div>

            {/* Row 2: Cards */}
            <PinWrapper
              id="order-table-row"
              meta={{ component: ReportCards }}
              skeleton={<ReportCardSkeleton />}
            >
              <ReportCards />
            </PinWrapper>

            {/* row 3 Table */}
            <ReportData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
