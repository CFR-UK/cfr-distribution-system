import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useModal } from "@/context/ModalContext";
import { useNavigate } from "react-router-dom";
import BarChart from "../components/Charts/BarChart";
import ResponsiveTrendChart from "../components/Charts/ResponsiveTrendChart";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import ActionButton from "../components/ActionButton";
import { menuOptions } from "../Constant/menuOptions";
import SearchBox from "../components/SearchBox";
import { Icon } from "@iconify/react";
import { Skeleton } from "primereact/skeleton";
import FlexibleCard from "../components/FlexibleCard";
import MenuActionButton from "../components/MenuActionButton";
import CustomPaginator from "../components/CustomPaginator";
import FilterCalendar from "../components/FilterCalendar";
import DropdownButton from "../components/DropdownButton";

const tabTitles = [
  {
    heading: "Order Details",
    subheading: "Real-time data on product and manage products.",
  },
];

const dataSets = [
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Delivered",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Pending",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Delivered",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "In Transit",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Delivered",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Cancelled",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Delivered",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Delivered",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Delivered",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Cancelled",
  },
  {
    orderId: "#45645645",
    customerName: "Sundar Lal",
    articleNumber: "SKU123",
    orderDate: "12/01/2025",
    amount: "$34,874",
    status: "Delivered",
  },
];

const filterableColumns = ["status", "dateRange"];

const productSellingData = [
  { product: "Furniture", urgency: 80 },
  { product: "Apparel", urgency: 55 },
  { product: "Appliance", urgency: 25 },
  { product: "Food", urgency: 90 },
  { product: "Health Care", urgency: 65 },
  { product: "Health Care", urgency: 20 },
  { product: "Furniture", urgency: 80 },
];

export default function ViewReport() {
  const { openModal, closeModal } = useModal();
  const exportMenuOptions = menuOptions(["CSV", "Excel"]);
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  // refresh page function
  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  // graph data
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  const graphData = {
    Electronics: {
      "This Year": [
        { x: "Jan", y: 70000, cartons: 52 },
        { x: "Feb", y: 40000, cartons: 56 },
        { x: "Mar", y: 100000, cartons: 54 },
        { x: "Apr", y: 50000, cartons: 50 },
        { x: "May", y: 75000, cartons: 48 },
        { x: "Jun", y: 35577, cartons: 45 },
        { x: "Jul", y: 90000, cartons: 38 },
        { x: "Aug", y: 50000, cartons: 40 },
        { x: "Sep", y: 54000, cartons: 44 },
        { x: "Oct", y: 65000, cartons: 44 },
        { x: "Nov", y: 100000, cartons: 44 },
        { x: "Dec", y: 50000, cartons: 44 },
      ],
    },

    Food: {
      "This Year": [
        { x: "Jan", y: 90000, cartons: 70 },
        { x: "Feb", y: 85000, cartons: 65 },
        { x: "Mar", y: 120000, cartons: 80 },
        { x: "Apr", y: 75000, cartons: 60 },
        { x: "May", y: 95000, cartons: 72 },
        { x: "Jun", y: 88000, cartons: 68 },
        { x: "Jul", y: 102000, cartons: 75 },
        { x: "Aug", y: 97000, cartons: 74 },
        { x: "Sep", y: 110000, cartons: 79 },
        { x: "Oct", y: 105000, cartons: 76 },
        { x: "Nov", y: 115000, cartons: 82 },
        { x: "Dec", y: 100000, cartons: 70 },
      ],
    },

    Furniture: {
      "This Year": [
        { x: "Jan", y: 40000, cartons: 20 },
        { x: "Feb", y: 30000, cartons: 18 },
        { x: "Mar", y: 60000, cartons: 25 },
        { x: "Apr", y: 45000, cartons: 22 },
        { x: "May", y: 50000, cartons: 23 },
        { x: "Jun", y: 42000, cartons: 20 },
        { x: "Jul", y: 55000, cartons: 26 },
        { x: "Aug", y: 47000, cartons: 21 },
        { x: "Sep", y: 49000, cartons: 22 },
        { x: "Oct", y: 53000, cartons: 24 },
        { x: "Nov", y: 61000, cartons: 28 },
        { x: "Dec", y: 48000, cartons: 22 },
      ],
    },
  };

  const summaryData = {
    Electronics: {
      "This Year": {
        overallSales: "$45,394",
      },
    },

    Food: {
      "This Year": {
        overallSales: "$25,394",
      },
    },

    Furniture: {
      "This Year": {
        overallSales: "$65,394",
      },
    },
  };

  // const currentData = summaryData[selectedCategory][selectedRange];
  const yearlyData = graphData[selectedCategory]["This Year"];
  const yearlySummary = summaryData[selectedCategory]["This Year"];

  //filter button
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
  // --- local UI / filter state ---
  const [globalFilter, setGlobalFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 9;

  // "applied" filters (what is currently active)
  const [filters, setFilters] = useState({}); // e.g. { status: ['Resolved'] }

  // filter panel open state & temporary values while panel is open
  const [tempFilters, setTempFilters] = useState({}); // temporary holder for checkboxes
  const [tempDateRange, setTempDateRange] = useState([
    { startDate: null, endDate: null, key: "selection" },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  // applied dateRange (same structure)
  const [dateRange, setDateRange] = useState([
    { startDate: null, endDate: null, key: "selection" },
  ]);

  // reset page when filters/search/date change
  useEffect(() => setCurrentPage(0), [filters, globalFilter, dateRange]);

  const rawData = dataSets;

  // has date-range available?
  const hasDateRangeFilter = filterableColumns.includes("dateRange");

  // unique filter values (status) — computed from rawData
  const uniqueFilterValues = useMemo(
    () => ({
      status: [...new Set(rawData.map((r) => r.status).filter(Boolean))],
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

  // parse date strings (accepts dd/mm/yyyy or ISO)
  const parseDateString = (s) => {
    if (!s) return new Date(NaN);
    if (s.includes("-")) return new Date(s); // ISO
    if (s.includes("/")) {
      const [a, b, c] = s.split("/");
      const day = parseInt(a, 10);
      const month = parseInt(b, 10);
      const year = parseInt(c, 10);
      return new Date(year, month - 1, day);
    }
    return new Date(s);
  };

  // Define columns per tab
  const statusTemplate = (rowData) => {
    const statusColors = {
      Delivered: "bg-[#22C55E26] text-[#22C55E]",
      "In Transit": "bg-[#2794DD26] text-[#2794DD]",
      Pending: "bg-[#DDD42726] text-[#DDD427]",
      Cancelled: "bg-[#FF695B26] text-[#FF695B]",
    };

    return (
      <span
        className={`flex items-center justify-center w-[100px] h-[28px] rounded text-[11px] font-medium ${
          statusColors[rowData.status] || "bg-gray-200 text-gray-800"
        }`}
      >
        {rowData.status}
      </span>
    );
  };

  const columns = useMemo(
    () => [
      { field: "orderId", header: "Order ID" },
      { field: "customerName", header: "Customer Name" },
      { field: "articleNumber", header: "Article Number" },
      { field: "orderDate", header: "Order Date" },
      { field: "amount", header: "Amount" },
      { field: "status", header: "Status", body: statusTemplate },
    ],
    []
  );

  // Filtering logic
  const filteredData = useMemo(() => {
    const startDate = dateRange[0]?.startDate;
    const endDate = dateRange[0]?.endDate;

    return rawData.filter((row) => {
      // column filters (checkboxes)
      const passesFilter = Object.entries(filters).every(([field, selected]) =>
        selected && selected.length ? selected.includes(row[field]) : true
      );

      // global search — searchable fields
      const passesSearch = globalFilter
        ? [
            "orderId",
            "customerName",
            "articleNumber",
            "orderDate",
            "amount",
            "status",
          ].some((k) =>
            row[k]
              ?.toString()
              .toLowerCase()
              .includes(globalFilter.toLowerCase())
          )
        : true;

      // date-range comparing against row.date
      let passesDateFilter = true;
      if (startDate && endDate) {
        const rowDate = parseDateString(row.date);
        if (
          isNaN(rowDate.getTime()) ||
          rowDate < startDate ||
          rowDate > endDate
        ) {
          passesDateFilter = false;
        }
      }

      return passesFilter && passesSearch && passesDateFilter;
    });
  }, [rawData, filters, globalFilter, dateRange]);

  // pagination
  const pagedRows = filteredData.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );
  const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));

  // filter panel handlers
  const openFilterPanel = () => {
    setTempFilters(filters || {});
    setTempDateRange(
      dateRange || [{ startDate: null, endDate: null, key: "selection" }]
    );
    setFilterOpen(true);
  };

  const applyTempFilters = () => {
    setFilters(tempFilters || {});
    setDateRange(
      tempDateRange || [{ startDate: null, endDate: null, key: "selection" }]
    );
    setFilterOpen(false);
    setShowCalendar(false);
    setCurrentPage(0);
  };

  const resetAllFilters = () => {
    setTempFilters({});
    setFilters({});
    const empty = [{ startDate: null, endDate: null, key: "selection" }];
    setTempDateRange(empty);
    setDateRange(empty);
    setFilterOpen(false);
    setShowCalendar(false);
    setCurrentPage(0);
  };

  // temp date input helpers (if you need iso string handlers)
  const setTempStart = (isoDateString) => {
    setTempDateRange((prev) => [
      {
        startDate: isoDateString ? new Date(isoDateString) : null,
        endDate: prev?.[0]?.endDate ?? null,
        key: "selection",
      },
    ]);
  };
  const setTempEnd = (isoDateString) => {
    setTempDateRange((prev) => [
      {
        startDate: prev?.[0]?.startDate ?? null,
        endDate: isoDateString ? new Date(isoDateString) : null,
        key: "selection",
      },
    ]);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, [key]);

  if (isLoading) {
    return (
      <div className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]">
        {/* Row 1: Title + Buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-2">
          {/* Title */}
          <div className="flex w-full justify-start items-start">
            <Skeleton
              width="150px"
              height="20px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-end items-center gap-2 md:gap-4 w-full">
            <Skeleton
              width="180px"
              height="45px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="126px"
              height="45px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>

        {/* Row 2: Cards */}
        <div className="grid grid-cols-12 gap-4 mb-2 justify-center">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[94px] bg-white dark:bg-black rounded-xl p-4"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2">
                    <Skeleton
                      width="80px"
                      height="14px"
                      className="dark:bg-[#2C2C2CAA]"
                    />
                    <Skeleton
                      width="60px"
                      height="20px"
                      className="dark:bg-[#2C2C2CAA]"
                    />
                  </div>
                  <Skeleton
                    width="50px"
                    height="50px"
                    className="dark:bg-[#2C2C2CAA] rounded-full"
                  />
                </div>
              </div>
            ))}
        </div>

        {/* Table Section */}
        <div className="bg-white dark:bg-[#000000] rounded-lg p-4 mt-4 h-auto">
          <div className="flex flex-col md:flex-row gap-2 items-center w-full">
            <div className="flex flex-col gap-1 w-full">
              <Skeleton
                width="150px"
                height="18px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="200px"
                height="14px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-end items-start lg:items-end gap-4 w-full">
              <Skeleton
                width="250px"
                height="36px"
                className="dark:bg-[#2C2C2CAA] rounded-2xl"
              />
              <Skeleton
                width="100px"
                height="40px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="104px"
                height="40px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>

          {/* Table rows */}
          <div className="pt-6">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex flex-row gap-4 border-b border-[#73779126] py-2 justify-between"
                >
                  {Array(6)
                    .fill(0)
                    .map((_, j) => (
                      <Skeleton
                        key={j}
                        width="100px"
                        height="20px"
                        className="dark:bg-[#2C2C2CAA]"
                      />
                    ))}
                </div>
              ))}
          </div>

          {/* Paginator skeleton */}
          <div className="flex justify-center mt-4 gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton
                  key={i}
                  width="32px"
                  height="32px"
                  className="dark:bg-[#2C2C2CAA] rounded-full"
                />
              ))}
          </div>
        </div>

        {/* Charts Row */}
        <div className="flex flex-col lg:flex-row w-full gap-4 mb-2 justify-center mt-4">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col w-full lg:w-[50%] h-[400px] bg-white dark:bg-black rounded-xl p-4"
              >
                <div className="flex justify-between items-center">
                  <Skeleton
                    width="200px"
                    height="20px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  <Skeleton
                    width="100px"
                    height="34px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>

                <div className="mt-4">
                  <Skeleton
                    width="120px"
                    height="18px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center mt-4">
                  <Skeleton
                    width="100%"
                    height="250px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="pb-5"></div>
      </div>
    );
  }
  return (
    <>
      {/* Main Inventory Dashboard */}
      <div
        key={key}
        className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]"
      >
        {/* Row 1: Main Dashboard */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-2">
          {/* Title (Hidden below lg) */}
          <h1
            className="text-[#EA7D00] text-[14px] flex flex-row items-center gap-1 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <Icon icon="ion:arrow-back-outline" />
            Back
          </h1>

          {/* Buttons Container */}
          <div className="flex flex-wrap justify-end items-center gap-2 md:gap-4 w-full">
            {/* refresh */}
            <ActionButton
              label="Refresh"
              icon="ic:round-refresh"
              iconPos="left"
              iconClass="w-5 h-5"
              buttonClass="flex items-center justify-center gap-2 text-[10px] md:text-[12px] h-[35px] md:h-[45px] w-auto px-2 md:px-4 bg-gray-50 dark:bg-[#141414] text-[#EA7D00] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
              onClick={handleRefresh}
            />
            {/* Export Button */}
            <MenuActionButton
              label="Export"
              icon="famicons:cloud-download-outline"
              iconPos="left"
              menuOptions={exportMenuOptions}
              buttonClass="flex items-center justify-center gap-2 text-[10px] md:text-[12px] h-[35px] md:h-[45px] w-[75px] md:w-[104px] px-2 md:px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
              menuClass="mt-2 w-[104px] p-2 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C]"
              iconClass="w-[14px] md:w-[16px] h-[14px] md:h-[16px]"
            />
          </div>
        </div>

        {/* Row 2: Cards */}
        <div className="grid grid-cols-12 gap-4 mb-2 justify-center">
          {/* card 1 */}
          <FlexibleCard
            cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
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
                      512
                    </h1>
                  </div>
                  <div className="pt-2">
                    <img
                      src="/TotalSaleReportIcon.png"
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
            cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
            headerClass=""
            centerClass=""
            footerClass=""
            header={
              <>
                <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                  <div className="flex flex-col gap-3">
                    <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                      Average Orders
                    </h2>
                    <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                      1,245
                    </h1>
                  </div>
                  <div className="pt-2">
                    <img
                      src="/AverageOrderIcon.png"
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
            cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
            headerClass=""
            centerClass=""
            footerClass=""
            header={
              <>
                <div className="flex flex-row gap-2 pl-4 pr-4 pb-2 pt-4 w-full justify-between">
                  <div className="flex flex-col gap-3">
                    <h2 className="flex text-[#00000066] dark:text-[#FFFFFFCC] text-[12px]">
                      Number of Orders
                    </h2>
                    <h1 className="text-[24px] text-[#151D48] dark:text-[#F2F2FE] font-bold">
                      512
                    </h1>
                  </div>
                  <div className="pt-2">
                    <img
                      src="/TotalSKUIcon.png"
                      alt="Total SKUs"
                      width="50px"
                      height="50px"
                    />
                  </div>
                </div>
              </>
            }
          />

          {/* card 4 */}
          <FlexibleCard
            cardClass="flex flex-col w-full col-span-12 md:col-span-6 lg:col-span-3 h-[94px] bg-white dark:bg-black rounded-xl hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
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
                      92%
                    </h1>
                  </div>
                  <div className="pt-2">
                    <img
                      src="/InventoryTurnOverReportIcon.png"
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

        {/* table */}
        <div className="bg-white dark:bg-[#000000] rounded-lg p-4 mt-4 h-auto">
          <div className="flex flex-col md:flex-row gap-2 items-center w-full">
            <div className="flex flex-col gap-1 w-full">
              <h2 className="text-[#333333] dark:text-[#F2F2FE] font-bold text-[16px] lg:text-[18px]">
                {tabTitles[0].heading}
              </h2>
              <p className="text-[12px] lg:text-[14px] text-[#666666] dark:text-[#F2F2FE]">
                {tabTitles[0].subheading}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-end items-start lg:items-end gap-4 w-full">
              <div className="ml-0 lg:ml-4">
                <SearchBox
                  styling="w-[250px] h-9 pl-10 pr-4 rounded-2xl text-sm bg-[#EA7D001A] dark:bg-[#EA7D0040] text-black dark:text-white border-none focus:outline-none"
                  placeholder="Search stocks, product, etc"
                  value={globalFilter}
                  onChange={(e) => {
                    setGlobalFilter(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row gap-4 relative">
                <div ref={filterButtonRef}>
                  <ActionButton
                    label="Filter"
                    icon="cuida:filter-outline"
                    buttonClass="flex items-center justify-center gap-1 text-sm h-[40px] w-[100px] px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
                    iconPos="left"
                    onClick={() => {
                      if (!filterOpen) {
                        setTempFilters({ ...filters });
                        setTempDateRange([...dateRange]);
                      }
                      setFilterOpen((prev) => !prev); // toggle panel open/close
                    }}
                  />
                </div>
                <MenuActionButton
                  label="Export"
                  icon="famicons:cloud-download-outline"
                  iconPos="left"
                  menuOptions={exportMenuOptions}
                  buttonClass="flex items-center justify-center gap-1 text-sm h-[40px] w-[104px] px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
                  menuClass="mt-2 w-[104px] p-2 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C]"
                  iconClass="w-[16px] h-[14px]"
                />

                {filterOpen && filterButtonRef.current && (
                  <div
                    ref={filterPanelRef} // ⬅ here
                    className="absolute bg-white dark:bg-[#0D0D0D] shadow-lg rounded-lg p-4 z-50"
                    style={{
                      top: filterButtonRef.current.offsetHeight + 4,
                      left:
                        window.innerWidth >= 1024
                          ? filterButtonRef.current.offsetLeft - 150
                          : filterButtonRef.current.offsetLeft,
                      minWidth: "16rem",
                    }}
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

                    {/* Date Range Filter */}
                    {hasDateRangeFilter && (
                      <div className="mb-3 relative">
                        {/* Use new FilterCalendar component */}
                        <FilterCalendar
                          value={tempDateRange}
                          onChange={setTempDateRange}
                        />
                      </div>
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
                          setTempDateRange([
                            {
                              startDate: null,
                              endDate: null,
                              key: "selection",
                            },
                          ]);
                          setDateRange([
                            {
                              startDate: null,
                              endDate: null,
                              key: "selection",
                            },
                          ]);
                        }}
                      />

                      <ActionButton
                        label="Apply Filter"
                        labelClass="font-normal"
                        buttonClass="flex items-center justify-center gap-1 text-[10px] w-full h-[35px] px-4 bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
                        onClick={() => {
                          setFilters(tempFilters); // temp filters ko apply filters me copy karo
                          setDateRange(tempDateRange); // temp date range ko apply date range me copy karo
                          setFilterOpen(false); // panel band karo
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Custom DataTable */}
          <div className="pt-6 overflow-x-auto w-full">
            <DataTable
              value={pagedRows}
              paginator={false}
              className="p-datatable-sm w-full "
              rowClassName={() =>
                "border-b border-[#73779126] text-[13px] text-[#666666] dark:text-[#F2F2FE] dark:bg-black whitespace-nowrap"
              }
            >
              {columns.map((col, idx) => (
                <Column
                  key={idx}
                  field={col.field}
                  header={col.header}
                  body={(rowData) =>
                    col.body ? col.body(rowData) : rowData[col.field]
                  }
                  headerClassName="text-[12px] text-[#33333380] dark:text-[#8E8E9C] dark:bg-black font-semibold bg-white whitespace-nowrap"
                  style={{ width: `${100 / columns.length}%` }}
                />
              ))}
            </DataTable>
          </div>

          {/* Your existing CustomPaginator */}
          <CustomPaginator
            totalPages={Math.ceil(filteredData.length / rowsPerPage)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            maxButtons={5} // keep your current prop or adjust as needed
          />
        </div>

        {/* charts */}
        <div className="flex flex-col lg:flex-row w-full gap-4 mb-2 justify-center mt-4">
          {/* Card 1 */}
          <FlexibleCard
            cardClass="flex flex-col w-full lg:w-[50%] h-[400px] bg-white dark:bg-black rounded-xl p-4 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
            headerClass="flex flex-row items-center justify-between"
            centerClass="items-center pt-2"
            footerClass="flex items-end justify-center h-full"
            header={
              <>
                <div className="flex w-full items-center">
                  <h1 className="text-[18px] font-bold text-[#151D48] dark:text-[#EEF1FF] ">
                    Sales Performance
                  </h1>
                </div>
                <div className="flex gap-2">
                  <DropdownButton
                    defaultOption="Electronics"
                    options={["Electronics", "Food", "Furniture"]}
                    buttonClassName="flex items-center rounded-lg justify-center gap-2 px-3 py-2 text-[#EA7D00] dark:text-[#EA7D00] font-bold text-[11px] h-[34px] w-[123px] bg-white dark:bg-black border border-[#EA7D00] focus:outline-none focus:ring-0"
                    dropdownClassName="bg-white dark:bg-[#121212] h-[80px] w-[123px]"
                    optionClassName="dark:text-gray-300 dark:hover:bg-gray-800 text-[11px]"
                    onChange={(value) => setSelectedCategory(value)}
                  />
                  <MenuActionButton
                    label="Export"
                    icon="famicons:cloud-download-outline"
                    iconPos="left"
                    menuOptions={exportMenuOptions}
                    buttonClass="flex items-center justify-center gap-1 text-[12px] h-[35px] w-[104px] px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
                    menuClass="mt-2 w-[104px] p-2 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C]"
                    iconClass="w-[16px] h-[16px]"
                  />
                </div>
              </>
            }
            center={
              <>
                <div className="gap-2 flex flex-col">
                  <h2 className="text-[8px] text-[#8E8E9C] dark:text-[#8E8E9C]">
                    Overall Sales
                  </h2>
                  <h1 className="text-[#0CB91D] dark:text-[#0DD121] font-bold text-[18px]">
                    {yearlySummary.overallSales}
                  </h1>
                </div>
              </>
            }
            footer={<ResponsiveTrendChart data={yearlyData} />}
          />
          {/* Card 2*/}
          <FlexibleCard
            cardClass="flex flex-col w-full lg:w-[50%] h-[400px] bg-white dark:bg-black rounded-xl p-4 hover:shadow-lg dark:hover:[box-shadow:2px_4px_12px_rgba(255,255,255,0.2)]"
            headerClass="flex flex-row items-center justify-between"
            centerClass="flex flex-row items-center pt-2"
            footerClass="flex items-end justify-center h-full"
            header={
              <>
                <div className="flex w-full items-center">
                  <h1 className="text-[18px] font-bold text-[#151D48] dark:text-[#EEF1FF] ">
                    Top Selling Categories
                  </h1>
                </div>
                <div className="flex gap-2">
                  <MenuActionButton
                    label="Export"
                    icon="famicons:cloud-download-outline"
                    iconPos="left"
                    menuOptions={exportMenuOptions}
                    buttonClass="flex items-center justify-center gap-1 text-[12px] h-[35px] w-[104px] px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
                    menuClass="mt-2 w-[104px] p-2 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C]"
                    iconClass="w-[16px] h-[16px]"
                  />
                </div>
              </>
            }
            center={
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-1 items-center justify-center">
                  <Icon
                    icon="ic:baseline-circle"
                    width="15"
                    height="15"
                    className="text-[#FF695B]"
                  />
                  <h2 className="text-[8px] text-[#737791] dark:text-[#737791]">
                    High Selling
                  </h2>
                </div>

                <div className="flex flex-row gap-1 items-center justify-center">
                  <Icon
                    icon="ic:baseline-circle"
                    width="15"
                    height="15"
                    className="text-[#DDD427]"
                  />
                  <h2 className="text-[8px] text-[#737791] dark:text-[#737791]">
                    Moderate Selling
                  </h2>
                </div>

                <div className="flex flex-row gap-1 items-center justify-center">
                  <Icon
                    icon="ic:baseline-circle"
                    width="15"
                    height="15"
                    className="text-[#22C55E]"
                  />
                  <h2 className="text-[8px] text-[#737791] dark:text-[#737791]">
                    Low Selling
                  </h2>
                </div>
              </div>
            }
            footer={
              <>
                <BarChart dataPoints={productSellingData} />
              </>
            }
          />
        </div>

        <div className="pb-5"></div>
      </div>
    </>
  );
}
