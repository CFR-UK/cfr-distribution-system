import React, { useState, useEffect, useRef, useMemo } from "react";
import RangeCalendar from "../components/RangeCalendar";
import ActionButton from "../components/ActionButton";
import MenuActionButton from "../components/MenuActionButton";
import { menuOptions } from "../Constant/menuOptions";
import { Skeleton } from "primereact/skeleton";
import FlexibleCard from "../components/FlexibleCard";
import TrendLineChart from "../components/Charts/TrendLineChart";
import DropdownButton from "../components/DropdownButton";
import MiniTrendArrowChart from "../components/Charts/MiniTrendArrowChart";
import SimpleTabView from "../components/SimpleTabView";
import YearlySalesTrendLines from "../components/Charts/YearlySalesTrendLines";
import PinWrapper from "../components/PinWrapper";
import { Icon } from "@iconify/react";

// AI Suggested Data
const aiSuggestedTabs = [
  {
    label: "Low Stock Notification",
    contentData: [
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
    ],
  },
  {
    label: "Operational Suggestions",
    contentData: [
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
      {
        title: "5 SKUs are running low!",
        text: "- Choco 6x20 – 3 left",
      },
    ],
  },
];

// top 10 product
const topTenProduct = [
  {
    rank: "#1",
    productName: "Milk 5 Choco 6x20 ",
    SKU: "JF94G463",
    stockLeft: "4 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#2",
    productName: "Milk 5 Choco 6x20 ",
    SKU: "JF94G463",
    stockLeft: "4 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#3",
    productName: "Milk 5 Choco 6x20 ",
    SKU: "JF94G463",
    stockLeft: "4 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#4",
    productName: "Milk 5 Choco 6x20 ",
    SKU: "JF94G463",
    stockLeft: "4 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#5",
    productName: "Strawberry Bar ",
    SKU: "FF354345T",
    stockLeft: "18 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#6",
    productName: "Strawberry Bar ",
    SKU: "FF354345T",
    stockLeft: "18 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#7",
    productName: "Milk 5 Choco 6x20 ",
    SKU: "JF94G463",
    stockLeft: "4 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#8",
    productName: "Strawberry Bar ",
    SKU: "FF354345T",
    stockLeft: "18 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#9",
    productName: "Milk 5 Choco 6x20 ",
    SKU: "JF94G463",
    stockLeft: "4 units",
    revenue: "€12,500 ",
  },
  {
    rank: "#10",
    productName: "Milk 5 Choco 6x20 ",
    SKU: "JF94G463",
    stockLeft: "4 units",
    revenue: "€12,500 ",
  },
];

// recent activity
const recentActivities = [
  {
    id: 1,
    name: "John Doe",
    role: "Admin",
    time: "10 min ago",
    taskTitle: "Need to reorder Product A stock.",
    deadline: "30/02/2025",
    image: "/profile.png",
  },
  {
    id: 2,
    name: "Alice Smith",
    role: "Manager",
    time: "10 min ago",
    taskTitle: "Prepare Q1 financial report.",
    deadline: "05/03/2025",
    taskName: "Q1 Report",
    image: "/profile.png",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Admin",
    time: "10 min ago",
    taskTitle: "Need to reorder Product A stock.",
    deadline: "30/02/2025",
    taskName: "Task name",
    image: "/profile.png",
  },

  {
    id: 4,
    name: "Tesst",
    role: "Admin",
    time: "10 min ago",
    taskTitle: "Need to reorder Product A stock.",
    deadline: "30/02/2025",
    taskName: "Task name",
    image: "/profile.png",
  },
  {
    id: 5,
    name: "Tesst",
    role: "Admin",
    time: "10 min ago",
    taskTitle: "Need to reorder Product A stock.",
    deadline: "30/02/2025",
    taskName: "Task name",
    image: "/profile.png",
  },
  {
    id: 6,
    name: "Tesst",
    role: "Admin",
    time: "10 min ago",
    taskTitle: "Need to reorder Product A stock.",
    deadline: "30/02/2025",
    taskName: "Task name",
    image: "/profile.png",
  },
];

export default function Dashboard() {
  const exportMenuOptions = menuOptions();
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, [key]);

  // refresh page function
  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  // ✅ Skeleton for row 1
  const Row1Skeleton = () => (
    <div className="flex flex-col lg:flex-row w-full gap-4 mt-4 justify-center lg:items-stretch">
      {/* card 1 skeleton */}
      <div className="flex flex-row w-full lg:flex-[1.5_1_50%] min-w-0 overflow-hidden h-[204px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl">
        {/* header skeleton */}
        <div className="flex flex-col justify-evenly pt-2 pb-2 m-4 gap-6 w-[40%] lg:w-[50%]">
          <Skeleton
            width="120px"
            height="14px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="140px"
            height="24px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <div className="flex flex-col gap-2">
            <Skeleton
              width="100px"
              height="22px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="80px"
              height="12px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>
        {/* center skeleton */}
        <div className="flex items-center justify-center w-[60%] lg:w-[50%] h-full pr-3">
          <Skeleton
            width="100px"
            height="100px"
            shape="circle"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
      </div>

      {/* card 2 skeleton */}
      <div className="flex flex-row w-full lg:flex-[1.5_1_50%] min-w-0 overflow-hidden h-[204px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl">
        {/* header skeleton */}
        <div className="flex flex-col justify-evenly pt-6 pb-1 pl-4 gap-4 w-[60%]">
          <Skeleton
            width="150px"
            height="14px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="160px"
            height="21px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="120px"
            height="26px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="90px"
            height="13px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
        {/* center skeleton */}
        <div className="flex flex-col pr-4 pt-6 gap-8 w-[40%]">
          <div className="flex justify-end">
            <Skeleton
              width="80px"
              height="80px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <div className="flex justify-end">
            <Skeleton
              width="150px"
              height="40px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // ✅ Skeleton for row 2
  const Row2Skeleton = () => (
    <div
      className="grid gap-4 mt-4 justify-center 
      [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]"
    >
      {/* card 1 skeleton */}
      <div className="flex flex-col w-full h-[135px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        {/* header skeleton */}
        <div className="flex flex-row justify-between mb-3">
          <Skeleton
            width="80px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="70px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>

        {/* center skeleton */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-3">
            <Skeleton
              width="100px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="60px"
              height="14px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="60px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
      </div>

      {/* card 2 skeleton */}
      <div className="flex flex-col w-full h-[135px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        <div className="flex flex-row justify-between mb-3">
          <Skeleton
            width="100px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="70px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-3">
            <Skeleton
              width="80px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="60px"
              height="14px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="60px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
      </div>

      {/* card 3 skeleton */}
      <div className="flex flex-col w-full h-[135px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        <div className="flex flex-row justify-between mb-3">
          <Skeleton
            width="70px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="70px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-3">
            <Skeleton
              width="90px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="60px"
              height="14px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="60px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
      </div>

      {/* card 4 skeleton */}
      <div className="flex flex-col w-full h-[135px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        <div className="flex flex-row justify-between mb-3">
          <Skeleton
            width="120px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="70px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-3">
            <Skeleton
              width="100px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="60px"
              height="14px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="60px"
            height="40px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>
      </div>
    </div>
  );

  // ✅ Skeleton for row 3
  const Row3Skeleton = () => (
    <div className="flex flex-col lg:flex-row gap-4 mt-4 justify-center lg:items-stretch">
      {/* Card 1 Skeleton: Top 10 Products */}
      <div className="flex flex-col w-full flex-1 min-w-0 h-[580px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        {/* header skeleton */}
        <div className="flex flex-row justify-between items-center mb-4">
          <Skeleton
            width="150px"
            height="20px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="100px"
            height="36px"
            className="rounded-md dark:bg-[#2C2C2CAA]"
          />
        </div>

        {/* table skeleton */}
        <div className="flex flex-col gap-3">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex flex-row justify-between items-center px-3 py-2 border-b border-[#73779126] dark:border-[#73779126]"
            >
              <Skeleton
                width="30px"
                height="14px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="120px"
                height="14px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="60px"
                height="14px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="70px"
                height="14px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="80px"
                height="14px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Card 2 Skeleton: AI Powered Suggestions */}
      <div className="flex flex-col w-full flex-1 min-w-0 h-[580px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        {/* header skeleton */}
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row items-center gap-3">
            <Skeleton
              width="20px"
              height="20px"
              className="rounded-full dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="20px"
              height="20px"
              className="rounded-full dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="140px"
              height="16px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <Skeleton
            width="70px"
            height="16px"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>

        {/* tab header skeleton */}
        <div className="flex flex-row gap-4 mb-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              width="60px"
              height="20px"
              className="dark:bg-[#2C2C2CAA]"
            />
          ))}
        </div>

        {/* tab content skeleton */}
        <div className="w-full h-[470px] overflow-hidden space-y-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-full h-[70px] bg-[#EA7D000f] dark:bg-[#EA7D000f] p-4 rounded-xl"
            >
              <Skeleton
                height="10px"
                width="40%"
                className="rounded-xl dark:bg-[#2C2C2CAA] mb-2"
              />
              <Skeleton
                height="12px"
                width="80%"
                className="rounded-xl dark:bg-[#2C2C2CAA]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ✅ Skeleton for row 4
  const Row4Skeleton = () => (
    <div className="flex flex-col lg:flex-row gap-4 mt-4 justify-center lg:items-stretch">
      {/* === Card 1 Skeleton (Recent Activities) === */}
      <div className="flex flex-col w-full flex-1 min-w-0 h-[380px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        {/* Header skeleton */}
        <Skeleton
          width="160px"
          height="22px"
          className="mb-3 rounded-md dark:bg-[#2C2C2CAA]"
        />

        {/* Activity items skeleton list */}
        <div className="h-[315px] w-full overflow-y-auto overflow-x-hidden space-y-4 pr-2 mt-2 scrollbar-thin scrollbar-thumb-[#8E8E9C2E] scrollbar-track-[#F2F2FE] dark:scrollbar-thumb-[#8E8E9C2E] dark:scrollbar-track-[#141414]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-full h-auto bg-[#F2F2FE80] dark:bg-[#14141480] rounded-xl p-3 flex flex-col gap-4"
            >
              {/* Header row skeleton (avatar + name + role + time) */}
              <div className="flex items-center gap-3">
                <Skeleton
                  shape="circle"
                  size="32px"
                  className="dark:bg-[#2C2C2CAA]"
                />
                <Skeleton
                  width="80px"
                  height="12px"
                  className="dark:bg-[#2C2C2CAA]"
                />
                <Skeleton
                  width="50px"
                  height="10px"
                  className="ml-2 dark:bg-[#2C2C2CAA]"
                />
                <div className="ml-auto">
                  <Skeleton
                    width="40px"
                    height="10px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
              </div>
              {/* Task title skeleton */}
              <Skeleton
                width="120px"
                height="14px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* === Card 2 Skeleton (Sales Trends) === */}
      <div className="flex flex-col w-full flex-1 min-w-0 h-[380px] bg-[#FFFFFF] dark:bg-[#000000] rounded-xl p-4">
        {/* Header skeleton (title + 2 dropdowns) */}
        <div className="flex justify-between items-center mb-4">
          <Skeleton
            width="140px"
            height="22px"
            className="dark:bg-[#2C2C2CAA]"
          />
          <div className="flex gap-3">
            <Skeleton
              width="123px"
              height="34px"
              className="rounded-lg dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="105px"
              height="34px"
              className="rounded-lg dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>

        {/* Center skeleton (big percentage + description + 3 labels) */}
        <div className="flex flex-row gap-4 items-start mb-4">
          <div className="flex flex-col gap-2">
            <Skeleton
              width="80px"
              height="28px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100px"
              height="14px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
          <div className="h-[60px] w-[2px] bg-gray-300 dark:bg-[#2C2C2CAA]" />
          <div className="flex flex-col gap-2">
            <Skeleton
              width="60px"
              height="12px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="60px"
              height="12px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="60px"
              height="12px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>

        {/* Footer skeleton (chart area) */}
        <Skeleton
          width="100%"
          height="240px"
          className="rounded-lg dark:bg-[#2C2C2CAA]"
        />
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div
        key={key}
        className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]"
      >
        {/* buttons skeleton */}
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
        {/* row 1 */}
        <Row1Skeleton />
        {/* row 2 */}
        <Row2Skeleton />
        {/* row 3 */}
        <Row3Skeleton />
        {/* row 4 */}
        <Row4Skeleton />
      </div>
    );
  }

  // row wise component
  const DashboardRow1Card = () => {
    return (
      <div className="flex flex-col lg:flex-row w-full gap-4 mt-4 justify-center lg:items-stretch">
        {/* card 1 */}
        <FlexibleCard
          cardClass="flex flex-row w-full lg:flex-[1.5_1_50%] min-w-0 overflow-hidden h-[204px] bg-gradient-to-r from-[#C2FFCA] via-[#D7FFDC] to-[#C2FFCA] dark:bg-gradient-to-r dark:from-[#012A06] dark:via-[#0D5715] dark:to-[#012A06] rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex-1 w-[40%] lg:w-[50%]"
          centerClass="flex items-center justify-center w-[60%] lg:w-[50%] h-[100%] overflow-hidden pr-3"
          footerClass=""
          header={
            <>
              <div className="flex flex-col justify-evenly pt-2 pb-2 m-4 gap-6">
                <h2 className="w-full text-[12px] font-semibold text-[#151D48] dark:text-white">
                  Top Performer Today!
                </h2>
                <h1 className="text-[22px] font-bold bg-gradient-to-r from-[#000000] to-[#00FF40] bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-[#00DA37] dark:to-[#048A12]">
                  Electronics
                </h1>
                <div className="flex flex-col gap-2">
                  <div className="text-[22px] font-bold text-[#151D48] dark:text-white">
                    $ 356K
                  </div>
                  <div className="text-[12px] text-[#151D48] dark:text-white">
                    of total sales
                  </div>
                </div>
              </div>
            </>
          }
          center={
            <TrendLineChart data={[0, 3, 1, 4]} height={200} width={200} />
          }
        />

        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-row w-full lg:flex-[1.5_1_50%] min-w-0 overflow-hidden] h-[204px] bg-gradient-to-r from-[#FFC7C8] via-[#FFDBDC] to-[#FFC7C8] dark:bg-gradient-to-r dark:from-[#610002] dark:via-[#9D0609] dark:to-[#610002] rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex-1 w-[60%]"
          centerClass="flex flex-col w-[40%]"
          footerClass=""
          header={
            <>
              <div className="flex flex-col justify-evenly pt-6 pb-1 pl-4 gap-4">
                <h2 className="text-[12px] font-semibold text-[#151D48] dark:text-white">
                  Biggest Bottleneck Today!
                </h2>
                <h1 className="text-[18px] lg:text-[21px] font-bold bg-gradient-to-r from-[#151D48] to-[#FF0000] bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-[#FF0000] dark:to-[#899CFF]">
                  Delayed Shipments
                </h1>
                <h2 className="text-[26px] font-extrabold text-[#151D48] dark:text-white">
                  12 Orders
                </h2>
                <h1 className="text-[13px] font-semibold text-[#AE0003] dark:text-[#C70003] mt-0 lg:-mt-4 xl:mt-0">
                  Delayed
                </h1>
              </div>
            </>
          }
          center={
            <div className="flex flex-col pr-4 pt-6 gap-8">
              <div className="flex justify-end ">
                <img
                  src="/red-exclamation-mark-symbol.png"
                  alt="Delayed Shipments"
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>
              <div className="flex justify-end">
                <ActionButton
                  label="Contact supplier!"
                  // onClick={AccessDenied}
                  buttonClass="flex items-center justify-center px-2 text-[12px] h-[40px] w-[150px] bg-[#151D48] text-white dark:bg-black dark:text-white border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          }
        />
      </div>
    );
  };

  const DashboardRow2Card = () => {
    const [revenuePeriod, setRevenuePeriod] = useState("This Week");
    const [customersPeriod, setCustomersPeriod] = useState("This Week");
    const [salesPeriod, setSalesPeriod] = useState("This Week");
    const [ordersPeriod, setOrdersPeriod] = useState("This Week");

    // revenue KPI Data
    const revenueData = {
      "This Week": {
        revenue: "$13,000",
        change: "50% This Week",
        chart: [1, 3, 5, 5, 4, 7, 6, 8],
        trend: "up",
      },
      "This Month": {
        revenue: "$50,000",
        change: "30% This Month",
        chart: [2, 4, 6, 8, 10, 12, 14, 16],
        trend: "up",
      },
      "This Year": {
        revenue: "$620,000",
        change: "70% This Year",
        chart: [5, 10, 8, 12, 15, 18, 20, 22],
        trend: "up",
      },
    };

    const {
      revenue,
      change: revenueChange,
      chart: revenueChart,
      trend: revenueTrend,
    } = revenueData[revenuePeriod];

    // customer KPI data
    const customersData = {
      "This Week": {
        value: "34,000",
        change: "50% This Week",
        chart: [8, 6, 7, 4, 5, 3, 4, 2],
        trend: "down",
      },
      "This Month": {
        value: "120,000",
        change: "20% This Month",
        chart: [5, 4, 6, 8, 7, 6, 5, 4],
        trend: "down",
      },
      "This Year": {
        value: "1,200,000",
        change: "60% This Year",
        chart: [3, 6, 9, 12, 15, 18, 21, 24],
        trend: "up",
      },
    };

    const {
      value: customerValue,
      change: customerChange,
      chart: customerChart,
      trend: customerTrend,
    } = customersData[customersPeriod];

    // sales data KPI
    const salesData = {
      "This Week": {
        value: "$13,000",
        change: "50% This Week",
        chart: [8, 6, 7, 5, 3, 4, 1, 2],
        trend: "down",
      },
      "This Month": {
        value: "$60,000",
        change: "40% This Month",
        chart: [2, 5, 7, 10, 12, 9, 11, 13],
        trend: "up",
      },
      "This Year": {
        value: "$700,000",
        change: "70% This Year",
        chart: [10, 20, 30, 40, 50, 60, 70, 80],
        trend: "up",
      },
    };

    const {
      value: salesValue,
      change: salesChange,
      chart: salesChart,
      trend: salesTrend,
    } = salesData[salesPeriod];

    // order data KPI
    const ordersData = {
      "This Week": {
        value: "$15,000",
        change: "25% This Week",
        chart: [1, 3, 2, 5, 4, 7, 6, 8],
        trend: "up",
      },
      "This Month": {
        value: "$70,000",
        change: "45% This Month",
        chart: [2, 4, 6, 8, 7, 9, 11, 13],
        trend: "up",
      },
      "This Year": {
        value: "$800,000",
        change: "65% This Year",
        chart: [5, 10, 15, 20, 25, 30, 35, 40],
        trend: "up",
      },
    };

    const {
      value: orderValue,
      change: orderChange,
      chart: orderChart,
      trend: orderTrend,
    } = ordersData[ordersPeriod];
    return (
      <div
        className="grid gap-4 mt-4 justify-center 
    [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]"
      >
        {/* card 1 */}
        <FlexibleCard
          cardClass="flex flex-col w-full  h-[135px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex-1 "
          centerClass=" "
          footerClass=""
          header={
            <>
              <div className="flex flex-row justify-between pt-3 pl-4 pr-4">
                <h2 className="flex text-[#737791] dark:text-[#FFFFFF] text-[12px]">
                  Revenue
                </h2>

                <DropdownButton
                  defaultOption={revenuePeriod}
                  options={["This Week", "This Month", "This Year"]}
                  className="ml-4"
                  buttonClassName="text-[#EA7D00] hover:underline"
                  dropdownClassName="border border-grey-50 w-[85px]"
                  optionClassName="hover:bg-[#f0f0ff]"
                  onChange={(value) => setRevenuePeriod(value)}
                />
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between pl-4 pr-4">
              <div className="flex flex-col gap-5 pb-3">
                <h1 className="font-extrabold text-[28px] text-[#151D48] dark:text-[#EEF1FF]">
                  {revenue}
                </h1>
                <h2 className="text-[#737791] text-[12px] dark:text-[#FFFFFF]">
                  {revenueChange}
                </h2>
              </div>
              <MiniTrendArrowChart data={revenueChart} trend={revenueTrend} />
            </div>
          }
        />

        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-col w-full  h-[135px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex-1"
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row justify-between pr-4 pt-3 pl-4">
                <h2 className="text-[#737791] dark:text-[#FFFFFF] text-[12px]">
                  New Customers
                </h2>

                <DropdownButton
                  defaultOption={customersPeriod}
                  options={["This Week", "This Month", "This Year"]}
                  className="ml-4"
                  buttonClassName="text-[#EA7D00] hover:underline"
                  dropdownClassName="bg-gray-50 border border-gray-200 w-[85px]"
                  optionClassName="hover:bg-[#f0f0ff]"
                  onChange={(value) => setCustomersPeriod(value)}
                />
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between pl-4 pr-4 ">
              <div className="flex flex-col gap-5 pb-3">
                <h1 className="font-extrabold text-[28px] text-[#151D48] dark:text-[#EEF1FF]">
                  {customerValue}
                </h1>
                <h2 className="text-[#737791] text-[12px] dark:text-[#FFFFFF]">
                  {customerChange}
                </h2>
              </div>
              <MiniTrendArrowChart data={customerChart} trend={customerTrend} />
            </div>
          }
        />

        {/* card 3 */}
        <FlexibleCard
          cardClass="flex flex-col w-full h-[135px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex-1"
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row justify-between pt-3 pl-4 pr-4">
                <h2 className="text-[#737791] dark:text-[#FFFFFF] text-[12px]">
                  Sales
                </h2>

                <DropdownButton
                  defaultOption={salesPeriod}
                  options={["This Week", "This Month", "This Year"]}
                  className="ml-4"
                  buttonClassName="text-[#EA7D00] hover:underline"
                  dropdownClassName="bg-gray-50 border border-gray-200 w-[85px]"
                  optionClassName="hover:bg-[#f0f0ff]"
                  onChange={(value) => setSalesPeriod(value)}
                />
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between pl-4 pr-4">
              <div className="flex flex-col gap-5 pb-3">
                <h1 className="font-extrabold text-[28px] text-[#151D48] dark:text-[#EEF1FF]">
                  {salesValue}
                </h1>
                <h2 className="text-[#737791] text-[12px] dark:text-[#FFFFFF]">
                  {salesChange}
                </h2>
              </div>

              <MiniTrendArrowChart data={salesChart} trend={salesTrend} />
            </div>
          }
        />

        {/* card 4 */}
        <FlexibleCard
          cardClass="flex flex-col w-full  h-[135px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex-1"
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row justify-between pt-3 pl-4 pr-4">
                <h2 className="text-[#737791] dark:text-[#FFFFFF] text-[12px]">
                  Orders Overview
                </h2>

                <DropdownButton
                  defaultOption={ordersPeriod}
                  options={["This Week", "This Month", "This Year"]}
                  className="ml-4"
                  buttonClassName="text-[#EA7D00] hover:underline"
                  dropdownClassName="bg-gray-50 border border-gray-200 w-[85px]"
                  optionClassName="hover:bg-[#f0f0ff]"
                  onChange={(value) => setOrdersPeriod(value)}
                />
              </div>
            </>
          }
          center={
            <div className="flex flex-row justify-between pl-4 pr-4">
              <div className="flex flex-col gap-5 pb-3">
                <h1 className="font-extrabold text-[28px] text-[#151D48] dark:text-[#EEF1FF]">
                  {orderValue}
                </h1>
                <h2 className="text-[#737791] text-[12px] dark:text-[#FFFFFF]">
                  {orderChange}
                </h2>
              </div>

              <MiniTrendArrowChart data={orderChart} trend={orderTrend} />
            </div>
          }
        />
      </div>
    );
  };

  const DashboardRow3Card = () => {
    const [tabLoading, setTabLoading] = useState(false);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabChange = (index) => {
      setTabLoading(true);
      setActiveTabIndex(index);
      setTimeout(() => {
        setTabLoading(false);
      }, 2000);
    };

    // filter button
    const filterButtonRef = useRef(null);
    const filterPanelRef = useRef(null);
    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          filterOpen &&
          filterButtonRef.current &&
          filterPanelRef.current &&
          !filterButtonRef.current.contains(event.target) &&
          !filterPanelRef.current.contains(event.target)
        ) {
          setFilterOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [filterOpen]);

    // "applied" filters (what is currently active)
    const [filters, setFilters] = useState({});

    // filter panel open state & temporary values while panel is open
    const [tempFilters, setTempFilters] = useState({});

    const rawData = topTenProduct;

    // unique filter values (status) — computed from rawData
    const uniqueFilterValues = useMemo(
      () => ({
        productName: [
          ...new Set(rawData.map((r) => r.productName).filter(Boolean)),
        ],
        SKU: [...new Set(rawData.map((r) => r.SKU).filter(Boolean))],
      }),
      [rawData]
    );

    // toggle a temp checkbox (status)
    const toggleTempValue = (field, value) => {
      setTempFilters((prev) => {
        const current = prev[field] || [];
        if (current.includes(value)) {
          return { ...prev, [field]: current.filter((v) => v !== value) };
        } else {
          return { ...prev, [field]: [...current, value] };
        }
      });
    };

    //filter logic
    const filteredData = useMemo(() => {
      return rawData.filter((row) => {
        // 1️⃣ Checkbox filters
        const passesCheckboxFilter = Object.entries(filters).every(
          ([field, selected]) =>
            selected.length ? selected.includes(row[field]) : true
        );

        return passesCheckboxFilter; // ✅ MUST return this
      });
    }, [rawData, filters]);
    return (
      <div className="flex flex-col lg:flex-row gap-4 mt-4 justify-center lg:items-stretch">
        {/* Card 1 */}

        <FlexibleCard
          cardClass="flex flex-col w-full flex-1 min-w-0 h-[580px] bg-white dark:bg-black rounded-xl p-4 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex justify-between"
          centerClass=""
          footerClass=""
          header={
            <>
              <div className="flex flex-row w-full justify-between items-center">
                <h1 className="font-bold text-[20px] text-[#333333] dark:text-white">
                  Top 10 Products
                </h1>
                <div className="relative" ref={filterButtonRef}>
                  <ActionButton
                    label="Filter"
                    icon="cuida:filter-outline"
                    buttonClass="flex items-center justify-center gap-1 text-sm h-[40px] w-[100px] px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
                    onClick={() => {
                      if (!filterOpen) setTempFilters(filters || {});
                      setFilterOpen((v) => !v);
                    }}
                  />
                  {filterOpen && filterButtonRef.current && (
                    <div
                      ref={filterPanelRef}
                      className="absolute top-full right-0 mt-2 bg-white dark:bg-[#0D0D0D] shadow-lg rounded-lg p-4 z-50 min-w-[16rem]"
                    >
                      {/* Close button */}
                      <button
                        type="button"
                        onClick={() => setFilterOpen(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Close filter panel"
                      >
                        <Icon
                          icon="mdi:close"
                          width={20}
                          height={20}
                          className="text-[#FF695B] bg-[#FF695B1A] rounded-full"
                        />
                      </button>
                      {/* Checkbox Filters */}
                      {Object.entries(uniqueFilterValues).map(
                        ([field, values]) => {
                          if (field === "dateRange") return null;

                          return (
                            <div key={field} className="mb-3">
                              <h4 className="font-semibold text-[12px] text-[#151D48] dark:text-[#F2F2FE] mb-2 capitalize">
                                {field}
                              </h4>
                              {values.map((val) => (
                                <label
                                  key={val}
                                  className="flex items-center gap-2 mb-1 text-[12px] text-[#737791CC] dark:text-[#F2F2FECC] cursor-pointer select-none"
                                >
                                  <input
                                    type="checkbox"
                                    checked={
                                      tempFilters[field]?.includes(val) || false
                                    }
                                    onChange={() => toggleTempValue(field, val)}
                                    className="hidden peer"
                                  />
                                  <span className="w-3.5 h-3.5 rounded border border-[#737791CC] peer-checked:bg-[#EA7D00] peer-checked:border-[#EA7D00] relative flex items-center justify-center">
                                    <svg
                                      className="w-2.5 h-2.5 text-white dark:text-[#0D0D0D]"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      viewBox="0 0 8 8"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M1 4l2 2 4-4" />
                                    </svg>
                                  </span>
                                  <span>{val}</span>
                                </label>
                              ))}
                            </div>
                          );
                        }
                      )}

                      {/* Buttons */}
                      <div className="flex flex-row justify-between mt-3 gap-2">
                        <ActionButton
                          label="Reset"
                          labelClass="font-normal"
                          buttonClass="flex items-center justify-center gap-1 text-[10px] h-[35px] w-full px-4 bg-white text-[#EA7D00] dark:bg-[#0D0D0D] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
                          onClick={() => {
                            setTempFilters({});
                            setFilters({});
                          }}
                        />

                        <ActionButton
                          label="Apply Filter"
                          labelClass="font-normal"
                          buttonClass="flex items-center justify-center gap-1 text-[10px] w-full h-[35px] px-4 bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
                          onClick={() => {
                            setFilters(tempFilters);
                            setFilterOpen(false);
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          }
          center={
            <div className="flex flex-col h-full pt-3 w-full overflow-x-auto">
              {/* Table wrapper */}
              <table
                className="text-sm text-left text-[#33333380] dark:text-[#F2F2FE80] min-w-[600px]"
                style={{ tableLayout: "fixed" }}
              >
                <thead className="text-[10px] md:text-[12px] w-full">
                  <tr>
                    <th className="px-3 py-3">Rank</th>
                    <th className="px-3 py-3" colSpan={2}>
                      Product Name
                    </th>
                    <th className="px-3 py-3">SKU</th>
                    <th className="px-3 py-3">Stock Left</th>
                    <th className="px-3 py-3">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#73779126] dark:border-[#73779126] dark:text-[#F2F2FE] text-[#666666]"
                    >
                      <td className="px-3 py-3">{item.rank}</td>
                      <td className="px-3 py-3 whitespace-nowrap" colSpan={2}>
                        {item.productName}
                      </td>
                      <td className="px-3 py-3">{item.SKU}</td>
                      <td className="px-3 py-3">{item.stockLeft}</td>
                      <td className="px-3 py-3 text-[#22C55E]">
                        {item.revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />

        {/* Card 2*/}
        <FlexibleCard
          cardClass="flex flex-col w-full flex-1 min-w-0 h-[580px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass=" pb-2"
          centerClass="px-4 flex items-center w-full"
          footerClass=""
          header={
            <>
              <div className="flex flex-row p-4 justify-between">
                <div className="flex flex-row justify-start items-center gap-4">
                  <Icon
                    icon="material-symbols:star-rounded"
                    width="20"
                    height="20"
                    className=" text-[#FFB200]"
                  />
                  <Icon
                    icon="mingcute:ai-line"
                    width="20"
                    height="20"
                    className=" text-[#5D5FEF]"
                  />
                  <h1 className="text-[14px] text-[#737791] dark:text-white font-medium">
                    AI Powered Suggestions
                  </h1>
                </div>
                <div className="">
                  <ActionButton
                    label="View All"
                    buttonClass="flex text-[12px] h-[24px] font-normal text-[#EA7D00] border-none focus:outline-none focus:ring-0 !shadow-none hover:underline"
                  />
                </div>
              </div>
            </>
          }
          center={
            tabLoading ? (
              // Skeleton for tab content only
              <div className="w-full h-[470px] overflow-hidden space-y-4">
                {[
                  ...Array(
                    aiSuggestedTabs[activeTabIndex]?.contentData?.length || 2
                  ),
                ].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-[70px] bg-[#EA7D000f] dark:bg-[#EA7D000f] p-4 rounded-xl"
                  >
                    <Skeleton
                      height="10px"
                      width="40%"
                      animation="wave"
                      className="rounded-xl dark:bg-[#2C2C2CAA] mb-2"
                    />
                    <Skeleton
                      height="12px"
                      width="80%"
                      animation="wave"
                      className="rounded-xl dark:bg-[#2C2C2CAA]"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <SimpleTabView
                activeIndex={activeTabIndex}
                tabs={aiSuggestedTabs}
                renderItem={(item) => (
                  <div className="h-auto w-full bg-[#EA7D000f] dark:bg-[#EA7D000f] p-4 rounded-xl">
                    <h2 className="text-[10px] text-[#BE6A15] font-medium">
                      {item.title}
                    </h2>
                    <p className="text-[14px] dark:text-white text-[#151D48] font-normal">
                      {item.text}
                    </p>
                  </div>
                )}
                tabLabelClass="text-[12px] font-normal pb-1"
                activeTabClass="text-[#EA7D00] border-b-[2px] border-[#EA7D00]"
                inactiveTabClass="text-[#737791] dark:text-white"
                tabHeaderClass="gap-5"
                contentContainerClass="mt-4 w-full"
                panelClass="w-full h-[470px] overflow-y-auto overflow-x-hidden space-y-4 pr-2 scrollbar-thin scrollbar-thumb-[#8E8E9C2E] scrollbar-track-[#F2F2FE] dark:scrollbar-thumb-[#8E8E9C2E] dark:scrollbar-track-[#141414]"
                onTabChange={handleTabChange}
              />
            )
          }
        />
      </div>
    );
  };

  const DashboardRow4Card = () => {
    // sales trend data
    const [selectedMetric, setSelectedMetric] = useState("Sales Trends");
    const [selectedRange, setSelectedRange] = useState("This Year");

    const salesDataGraph = {
      "This Year": {
        "Sales Trends": {
          Jan: { value: 50, status: "High" },
          Feb: { value: 25, status: "Low" },
          Mar: { value: 35, status: "Medium" },
          Apr: { value: 60, status: "High" },
          May: { value: 40, status: "Medium" },
          Jun: { value: 30, status: "Low" },
          Jul: { value: 70, status: "High" },
          Aug: { value: 55, status: "Medium" },
          Sep: { value: 45, status: "Medium" },
          Oct: { value: 35, status: "Low" },
          Nov: { value: 20, status: "Low" },
          Dec: { value: 60, status: "High" },
        },
        Productivity: {
          Jan: { value: 50, status: "High" },
          Feb: { value: 25, status: "Low" },
          Mar: { value: 55, status: "Medium" },
          Apr: { value: 60, status: "High" },
          May: { value: 50, status: "Medium" },
          Jun: { value: 30, status: "Low" },
          Jul: { value: 80, status: "High" },
          Aug: { value: 55, status: "Medium" },
          Sep: { value: 45, status: "Medium" },
          Oct: { value: 35, status: "Low" },
          Nov: { value: 10, status: "Low" },
          Dec: { value: 90, status: "High" },
        },
        Inventory: {
          Jan: { value: 50, status: "High" },
          Feb: { value: 15, status: "Low" },
          Mar: { value: 45, status: "Medium" },
          Apr: { value: 70, status: "High" },
          May: { value: 35, status: "Medium" },
          Jun: { value: 25, status: "Low" },
          Jul: { value: 80, status: "High" },
          Aug: { value: 50, status: "Medium" },
          Sep: { value: 40, status: "Medium" },
          Oct: { value: 30, status: "Low" },
          Nov: { value: 10, status: "Low" },
          Dec: { value: 70, status: "High" },
        },
      },

      "This Month": {
        "Sales Trends": {
          1: { value: 40, status: "Medium" },
          2: { value: 55, status: "High" },
          3: { value: 60, status: "High" },
          4: { value: 45, status: "Medium" },
          5: { value: 70, status: "High" },
          6: { value: 65, status: "High" },
          7: { value: 80, status: "High" },
          8: { value: 75, status: "High" },
          9: { value: 90, status: "High" },
          10: { value: 95, status: "High" },
          11: { value: 40, status: "Medium" },
          12: { value: 55, status: "High" },
          13: { value: 60, status: "High" },
          14: { value: 45, status: "Medium" },
          15: { value: 70, status: "High" },
          16: { value: 25, status: "Low" },
          17: { value: 80, status: "High" },
          18: { value: 75, status: "High" },
          19: { value: 90, status: "High" },
          20: { value: 95, status: "High" },
          21: { value: 40, status: "Medium" },
          22: { value: 25, status: "Low" },
          23: { value: 60, status: "High" },
          24: { value: 45, status: "Medium" },
          25: { value: 70, status: "High" },
          26: { value: 65, status: "High" },
          27: { value: 10, status: "Low" },
          28: { value: 75, status: "High" },
          29: { value: 70, status: "High" },
          30: { value: 15, status: "Low" },
        },
        Productivity: {
          1: { value: 30, status: "Low" },
          2: { value: 45, status: "Medium" },
          3: { value: 55, status: "Medium" },
          4: { value: 65, status: "High" },
          5: { value: 75, status: "High" },
          6: { value: 80, status: "High" },
          7: { value: 85, status: "High" },
          8: { value: 70, status: "High" },
          9: { value: 60, status: "Medium" },
          10: { value: 95, status: "High" },
        },
        Inventory: {
          1: { value: 20, status: "Low" },
          2: { value: 35, status: "Medium" },
          3: { value: 50, status: "Medium" },
          4: { value: 60, status: "High" },
          5: { value: 70, status: "High" },
          6: { value: 55, status: "Medium" },
          7: { value: 45, status: "Medium" },
          8: { value: 65, status: "High" },
          9: { value: 75, status: "High" },
          10: { value: 85, status: "High" },
        },
      },

      "This Week": {
        "Sales Trends": {
          Mon: { value: 50, status: "High" },
          Tue: { value: 70, status: "High" },
          Wed: { value: 65, status: "High" },
          Thu: { value: 80, status: "High" },
          Fri: { value: 90, status: "High" },
          Sat: { value: 60, status: "Medium" },
          Sun: { value: 75, status: "High" },
        },
        Productivity: {
          Mon: { value: 40, status: "Medium" },
          Tue: { value: 55, status: "Medium" },
          Wed: { value: 60, status: "High" },
          Thu: { value: 75, status: "High" },
          Fri: { value: 85, status: "High" },
          Sat: { value: 50, status: "Medium" },
          Sun: { value: 65, status: "High" },
        },
        Inventory: {
          Mon: { value: 30, status: "Low" },
          Tue: { value: 45, status: "Medium" },
          Wed: { value: 55, status: "Medium" },
          Thu: { value: 65, status: "High" },
          Fri: { value: 70, status: "High" },
          Sat: { value: 40, status: "Medium" },
          Sun: { value: 50, status: "Medium" },
        },
      },
    };

    const finalData = useMemo(() => {
      return salesDataGraph[selectedRange]?.[selectedMetric] || {};
    }, [selectedMetric, selectedRange]);
    return (
      <div className="flex flex-col lg:flex-row gap-4 mt-4 justify-center lg:items-stretch">
        {/* Card 1*/}
        <FlexibleCard
          cardClass="flex flex-col w-full flex-1 min-w-0 h-[380px] bg-white dark:bg-black rounded-xl p-4 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="w-full"
          centerClass="w-full"
          footerClass="w-full"
          header={
            <>
              <h1 className="text-[#151D48] text-[20px] dark:text-[#EEF1FF] font-extrabold">
                Recent Activities
              </h1>
            </>
          }
          center={
            <div className="h-[315px] w-full overflow-y-auto overflow-x-hidden space-y-4 pr-2 mt-2 scrollbar-thin scrollbar-thumb-[#8E8E9C2E] scrollbar-track-[#F2F2FE] dark:scrollbar-thumb-[#8E8E9C2E] dark:scrollbar-track-[#141414]">
              {recentActivities.map((activity) => (
                <FlexibleCard
                  key={activity.id}
                  cardClass="w-full h-auto bg-[#F2F2FE80] dark:bg-[#14141480] border-none rounded-xl p-3"
                  headerClass=""
                  centerClass=""
                  footerClass="flex flex-row items-center"
                  header={
                    <div className="relative flex w-full items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src={activity.image}
                          alt={activity.taskName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <h3 className="text-[12px] text-[#151D48] dark:text-[#EEF1FF]">
                          {activity.name}
                        </h3>
                      </div>
                      <Icon
                        icon="ph:dot"
                        width="20"
                        height="20"
                        className="text-[#00000066] dark:text-[#FFFFFF66] ml-2"
                      />
                      <h1 className="text-[10px] text-[#00000066] dark:text-[#FFFFFF66] ml-1">
                        {activity.role}
                      </h1>
                      <div className="flex items-center ml-auto">
                        <h1 className="text-[10px] text-[#00000066] dark:text-[#FFFFFF66]">
                          {activity.time}
                        </h1>
                      </div>
                    </div>
                  }
                  footer={
                    <div className="flex flex-col gap-1 pt-1">
                      <h1 className="text-[15px] text-[#151D48] dark:text-[#EEF1FF] font-semibold">
                        {activity.taskTitle}
                      </h1>
                    </div>
                  }
                />
              ))}
            </div>
          }
        />

        {/* card 2 */}
        <FlexibleCard
          cardClass="flex flex-col w-full flex-1 min-w-0 h-[380px] bg-white dark:bg-black rounded-xl p-4 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
          headerClass="flex justify-between"
          centerClass="flex flex-row gap-4"
          footerClass=""
          header={
            <>
              <div className="">
                <h1 className="font-extrabold text-[20px] text-[#151D48] dark:text-[#EEF1FF]">
                  Sales Trends
                </h1>
              </div>
              <div className="flex flex-row justify-end gap-4">
                <DropdownButton
                  defaultOption={selectedMetric}
                  options={["Sales Trends", "Productivity", "Inventory"]}
                  buttonClassName="flex items-center rounded-lg justify-center gap-2 px-3 py-2 text-[#EA7D00]  font-bold text-[11px] h-[34px] w-[123px] bg-white dark:bg-black border border-[#EA7D00] focus:outline-none focus:ring-0"
                  dropdownClassName="bg-white dark:bg-[#121212] h-[80px] w-[123px]"
                  onChange={(value) => setSelectedMetric(value)}
                />
                <DropdownButton
                  defaultOption={selectedRange}
                  options={["This Week", "This Month", "This Year"]}
                  buttonClassName="flex items-center rounded-lg justify-center gap-2 px-3 py-2 text-white dark:text-black font-bold text-[11px] h-[34px] w-[105px] bg-gradient-to-r from-[#EA7D00] to-[#896235] border-none focus:outline-none focus:ring-0"
                  dropdownClassName="bg-white dark:bg-[#121212] h-[80px] w-[105px]"
                  onChange={(value) => setSelectedRange(value)}
                />
              </div>
            </>
          }
          center={
            <>
              <div>
                <h1 className="text-[#0CB91D] font-extrabold text-[28px]">
                  75.08%
                </h1>
                <h2 className="flex flex-row gap-1 text-[#2B2B2B] dark:text-[#D4D4D4] font-light text-[12px]">
                  <span className="text-[#0CB91D]">
                    <Icon
                      icon="clarity:arrow-line"
                      width="16"
                      height="18"
                      className="text-"
                    />
                  </span>
                  2% more than year
                </h2>
              </div>
              <div className="h-[60px] w-[2px] bg-[#E3E4E9]" />
              <div className="flex flex-col gap-2">
                <h2 className="flex items-center gap-1 text-[11px] text-[#727677] dark:text[#727677] text-normal">
                  <span>
                    <Icon
                      icon="ic:round-circle"
                      width="10"
                      height="10"
                      className="text-[#0CB91D]"
                    />
                  </span>
                  High
                </h2>
                <h2 className="flex items-center gap-1 text-[11px] text-[#727677] dark:text[#727677] text-normal">
                  <span>
                    <Icon
                      icon="ic:round-circle"
                      width="10"
                      height="10"
                      className="text-[#DDD427]"
                    />
                  </span>
                  Medium
                </h2>
                <h2 className="flex items-center gap-1 text-[11px] text-[#727677] dark:text[#727677] text-normal">
                  <span>
                    <Icon
                      icon="ic:round-circle"
                      width="10"
                      height="10"
                      className="text-[#FF695B]"
                    />
                  </span>
                  Low
                </h2>
              </div>
            </>
          }
          footer={
            <>
              <YearlySalesTrendLines data={finalData} height={240} />
            </>
          }
        />
      </div>
    );
  };

  return (
    <div
      key={key}
      className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]"
    >
      {/* buttons */}
      <div className="flex flex-wrap justify-start items-center gap-4 w-full">
        <div className="w-auto h-[24px] xs:h-[30px] sm:h-[32px] md:h-[45px] flex items-center justify-center">
          {/* RangeCalendar */}
          <RangeCalendar icon="quill:calendar" placeholder="Select Date" />
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

      {/* row 1 */}
      <PinWrapper
        id="dashboard-row-1"
        meta={{ component: DashboardRow1Card }}
        skeleton={<Row1Skeleton />}
      >
        <DashboardRow1Card />
      </PinWrapper>

      {/* row 2 */}
      <PinWrapper
        id="dashboard-row-2"
        meta={{ component: DashboardRow2Card }}
        skeleton={<Row2Skeleton />}
      >
        <DashboardRow2Card />
      </PinWrapper>

      {/* row 3 */}
      <PinWrapper
        id="dashboard-row-1"
        meta={{ component: DashboardRow3Card }}
        skeleton={<Row3Skeleton />}
      >
        <DashboardRow3Card />
      </PinWrapper>

      {/* row 4 */}
      <PinWrapper
        id="dashboard-row-4"
        meta={{ component: DashboardRow4Card }}
        skeleton={<Row4Skeleton />}
      >
        <DashboardRow4Card />
      </PinWrapper>

      <div className="pt-4"></div>
    </div>
  );
}
