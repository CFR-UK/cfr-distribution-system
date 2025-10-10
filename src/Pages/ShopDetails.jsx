import { useNavigate } from "react-router-dom";
import { useModal } from "@/context/ModalContext";
import React, { useState, useEffect } from "react";
import ActionButton from "../components/ActionButton";
import { Skeleton } from "primereact/skeleton";
import { menuOptions } from "../Constant/menuOptions";
import { Icon } from "@iconify/react";
import FlexibleCard from "../components/FlexibleCard";
import ShopDetailsData from "../components/ShopDetailsData";

export default function ShopDetails() {
  const { openModal, closeModal } = useModal();

  const [key, setKey] = useState(0);
  const exportMenuOptions = menuOptions();
  const navigate = useNavigate();

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const documents = [
    { label: "Shop License", name: "License", size: "37KB" },
    { label: "Shop License", name: "License", size: "37KB" },
    { label: "Shop License", name: "License", size: "37KB" },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [key]);

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

              {/* Row 2 */}
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

              {/* Row 4 */}
              <div className="grid grid-cols-4 justify-between gap-4">
                <div className="flex flex-col col-span-2 gap-1">
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
            {/* row 3 */}
            <div className="pt-3">
              <div className="bg-white dark:bg-black rounded-xl p-4 w-full">
                {/* Section Heading Skeleton */}
                <Skeleton
                  width="150px"
                  height="20px"
                  className="mb-4 dark:bg-[#2C2C2CAA]"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col gap-1">
                      {/* Label skeleton */}
                      <Skeleton
                        width="100px"
                        height="12px"
                        className="mb-1 dark:bg-[#2C2C2CAA]"
                      />

                      {/* Document Card Skeleton */}
                      <div className="flex items-center justify-between rounded-lg border border-[#FFDDBE] bg-[#FFF8F1] px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Skeleton
                            shape="circle"
                            width="22px"
                            height="22px"
                            className="dark:bg-[#2C2C2CAA]"
                          />
                          <div className="flex flex-col gap-1">
                            <Skeleton
                              width="80px"
                              height="14px"
                              className="dark:bg-[#2C2C2CAA]"
                            />
                            <Skeleton
                              width="40px"
                              height="10px"
                              className="dark:bg-[#2C2C2CAA]"
                            />
                          </div>
                        </div>

                        <Skeleton
                          width="60px"
                          height="24px"
                          className="rounded-lg dark:bg-[#2C2C2CAA]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ShopDetailsData isLoading={true} key={key} />;
          </>
        ) : (
          <>
            {/* Row 1: shop details */}
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
                  Shop
                </h1>
              </div>

              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col col-span-1  gap-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Company Name
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Shraiy Gupta
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Company Number
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Gupta Store
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Owner Name
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Gupta Store
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col col-span-1  gap-1">
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

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Payment Terms
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    7 Days
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col col-span-1  gap-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Bank Transfer
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    Metro
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    City
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    New York
                  </p>
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Pin Code
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    234234
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 justify-between gap-4">
                <div className="flex flex-col col-span-1  gap-1">
                  <h2 className="text-[7px] md:text-[10px] text-[#737791] dark:text-[#8E8E9C]">
                    Shop Address
                  </h2>
                  <p className="text-[12px] md:text-[16px] text-[#2B2B2B] dark:text-[#D4D4D4]">
                    western street, 134234, New York, USA
                  </p>
                </div>
              </div>
            </div>

            {/* row 3 */}
            <div className="pt-3">
              <div className="bg-white dark:bg-black rounded-xl p-4 w-full hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]">
                {/* Section Heading */}
                <h2 className="text-[#151D48] dark:text-white font-bold text-[16px] mb-4">
                  Legal Documents
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      {/* Label */}
                      <p className="text-[12px] text-[#737791] dark:text-[#8E8E9C] mb-1">
                        {doc.label}
                      </p>

                      {/* Document Card */}
                      <div className="flex items-center justify-between rounded-lg border border-[#FFDDBE] bg-[#FFF8F1] px-4 py-3">
                        {/* Left: Icon + Name */}
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="mdi:file-pdf-box"
                            className="text-[#FF4D4D]"
                            width={22}
                            height={22}
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-[#151D48] dark:text-white">
                              {doc.name}
                            </span>
                            <span className="text-xs text-[#737791]">
                              {doc.size}
                            </span>
                          </div>
                        </div>

                        {/* Right: Button */}
                        <button className="px-3 py-1 w-[85px] text-sm font-medium text-[#EA7D00] border border-[#EA7D00] bg-[#EA7D001A] rounded-lg hover:bg-[#EA7D0033] transition">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* row 4 Table */}
            <ShopDetailsData isLoading={isLoading} key={key} />

            <div className="pb-5"></div>
          </>
        )}
      </div>
    </>
  );
}
