import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useModal } from "@/context/ModalContext";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import ActionButton from "./ActionButton";
import { menuOptions } from "../Constant/menuOptions";
import SearchBox from "./SearchBox";
import { Icon } from "@iconify/react";
import { Skeleton } from "primereact/skeleton";
import MenuActionButton from "./MenuActionButton";
import CustomPaginator from "./CustomPaginator";
import PinWrapper from "./PinWrapper";
import AddManufacturerModal from "../Modals/AddManufacturerModal";

const tabTitles = [
  {
    heading: "Orders",
    subheading: "Real-time data on customers and manage customers.",
  },
  {
    heading: "Orders",
    subheading: "Real-time data on customers and manage customers.",
  },
];

const dataSets = {
  orders: [
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Not Approved",
      status: "Delivered",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Kapil Dev",
      status: "Cancelled",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Promo",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Not Approved",
      status: "In Transit",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Not Approved",
      status: "Delivered",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Not Approved",
      status: "Pending",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Pending",
      status: "Pending",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Kapil Dev",
      status: "Delivered",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Not Approved",
      status: "Delivered",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Not Approved",
      status: "Delivered",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Normal",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Pending",
      status: "In Transit",
      action: "View Details",
    },
    {
      po: "#2464345",
      noOfProducts: 3,
      qty: 22,
      order: "Promo",
      price: "€43",
      createdBy: "Abhiraj Singh",
      approvedBy: "Not Approved",
      status: "Cancelled",
      action: "View Details",
    },
  ],
  manufacturers: [
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
    {
      manufacturerName: "Felfoldi Confectionery Ltd.",
      mobile: "+91 3564564565",
      email: "company@gmail.com",
      contactPerson: "Abhiraj Singh",
      action: "View Details",
    },
  ],
};

const filterFields = {
  orders: ["order", "status"],
  manufacturers: ["manufacturerName"],
};

export default function ManufacturerData() {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const addManufacturer = () => {
    closeModal();
    setTimeout(() => {
      openModal(AddManufacturerModal, {
        sizeClass: "w-[85%] md:w-[60%]",
      });
    }, 200);
  };

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

  const exportMenuOptions = menuOptions(["CSV", "Excel"]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [globalFilter, setGlobalFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 7;
  const [filters, setFilters] = useState({});

  const [tempFilters, setTempFilters] = useState({});

  const tabKeys = ["orders", "manufacturers"];
  const activeTabKey = tabKeys[activeIndex];
  const rawData = dataSets[activeTabKey];

  // Reset page on tab/filter/search change
  useEffect(() => {
    setCurrentPage(0);
  }, [activeIndex, filters, globalFilter]);

  // Extract unique filter values for filter checkboxes
  const uniqueFilterValues = useMemo(() => {
    const fields = filterFields[activeTabKey] || [];
    let values = {};
    fields.forEach((field) => {
      values[field] = [...new Set(rawData.map((item) => item[field]))].filter(
        Boolean
      );
    });
    return values;
  }, [activeTabKey, rawData]);

  const filteredData = useMemo(() => {
    return rawData.filter((row) => {
      // 1️⃣ Checkbox filters
      const passesCheckboxFilter = Object.entries(filters).every(
        ([field, selected]) =>
          selected.length ? selected.includes(row[field]) : true
      );

      // 2️⃣ Global search
      const passesSearch = globalFilter
        ? Object.values(row).some(
            (val) =>
              val &&
              val.toString().toLowerCase().includes(globalFilter.toLowerCase())
          )
        : true;

      return passesCheckboxFilter && passesSearch;
    });
  }, [rawData, filters, globalFilter, activeTabKey]);

  // Pagination slice
  const pagedRows = filteredData.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  // Define columns per tab
  const statusTemplate = (rowData) => {
    const statusColors = {
      Delivered: "bg-[#22C55E26] text-[#22C55E]",
      Pending: "bg-[#DDD42726] text-[#DDD427]",
      "In Transit": "bg-[#2794DD26] text-[#2794DD]",
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

  const columns = useMemo(() => {
    switch (activeTabKey) {
      case "orders":
        return [
          { field: "po", header: "PO" },
          { field: "noOfProducts", header: "No. of Products" },
          { field: "qty", header: "Qty(Cartons)" },
          { field: "order", header: "Order" },
          { field: "price", header: "Price" },
          { field: "createdBy", header: "Created By" },
          { field: "approvedBy", header: "Approved By" },
          { field: "status", header: "Status", body: statusTemplate },
          {
            field: "action",
            header: "Actions",
            body: (rowData) => (
              <button
                className="w-[110px] h-[28px] flex items-center gap-1 px-3 py-1 bg-[#EA7D00] hover:bg-[#CC6600] text-white text-[12px] rounded dark:text-[#0D0D0D] dark:bg-[#EA7D00]"
                onClick={() => navigate("/manufacturerorderdetails")}
              >
                <Icon
                  icon="hugeicons:view"
                  width={14}
                  height={14}
                  className="text-[#ffffff] dark:text-[#0D0D0D]"
                />
                View Details
              </button>
            ),
          },
        ];
      case "manufacturers":
        return [
          { field: "manufacturerName", header: "Manufacturer Name" },
          { field: "mobile", header: "Mobile" },
          { field: "email", header: "Email" },
          { field: "contactPerson", header: "Contact Person" },
          {
            field: "action",
            header: "Actions",
            body: (rowData) => (
              <button
                className="w-[110px] h-[28px] flex items-center gap-1 px-3 py-1 bg-[#EA7D00] hover:bg-[#CC6600] text-white text-[12px] rounded dark:text-[#0D0D0D] dark:bg-[#EA7D00]"
                onClick={() => navigate("/manufacturerdetails")}
              >
                <Icon
                  icon="hugeicons:view"
                  width={14}
                  height={14}
                  className="text-[#ffffff] dark:text-[#0D0D0D]"
                />
                View Details
              </button>
            ),
          },
        ];

      default:
        return [];
    }
  }, [activeTabKey]);

  // Toggle filter checkbox value
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const resetFilters = () => setFilters({});

  const TableSkeleton = () => (
    <>
      <div className="p-4 space-y-4 relative bg-white dark:bg-[#000000] rounded-lg mt-8">
        <div className="inline-flex w-full md:w-auto bg-[#F2F2FE] dark:bg-[#141414] h-[48px] items-center rounded-full overflow-hidden whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <Skeleton
              key={i}
              width={150}
              height={40}
              className="mx-1 rounded-full dark:bg-[#2C2C2CAA]"
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-2 items-center w-full">
          <div className="flex flex-row gap-3 items-center w-full">
            {/* Title + Subheading */}
            <div className="flex flex-col gap-1 w-full">
              <Skeleton
                width={200}
                height={18}
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width={150}
                height={14}
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end items-start lg:items-end gap-4 w-full lg:w-auto">
            <Skeleton
              width={250}
              height={36}
              className="rounded-2xl dark:bg-[#2C2C2CAA]"
            />
            <div className="flex flex-row gap-4 relative w-full">
              <Skeleton
                width={100}
                height={40}
                className="rounded dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width={104}
                height={40}
                className="rounded dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 overflow-x-auto w-full gap-2">
          <div className="space-y-2 ">
            {[...Array(7)].map((_, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-row justify-between border-b border-[#73779126] w-full gap-2"
              >
                {[...Array(7)].map((_, colIdx) => (
                  <Skeleton
                    key={colIdx}
                    width="16%"
                    height={20}
                    className="rounded dark:bg-[#2C2C2CAA] gap-2"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, idx) => (
            <Skeleton
              key={idx}
              width={30}
              height={30}
              className="mx-1 rounded-full dark:bg-[#2C2C2CAA]"
            />
          ))}
        </div>
      </div>
    </>
  );

  if (isLoading) {
    return (
      <div className="space-y-4">
        {/* Table Skeleton */}
        <TableSkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-4 ">
      <PinWrapper
        id="Manufacturer-Table"
        meta={{ component: ManufacturerData }}
        skeleton={<TableSkeleton />}
      >
        <div className="p-4 space-y-4 relative bg-white dark:bg-[#000000] rounded-lg mt-8">
          {/* Tabs */}
          <div className="inline-flex w-auto bg-[#F2F2FE] dark:bg-[#141414] h-[48px] items-center rounded-full overflow-hidden whitespace-nowrap">
            {["Orders", "Manufacturers"].map((label, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsLoading(true); // show skeleton
                  setActiveIndex(i);
                  resetFilters();
                  setGlobalFilter("");

                  // Simulate data fetch delay (can replace with real API call)
                  setTimeout(() => {
                    setIsLoading(false); // hide skeleton
                  }, 2000); // 2 seconds delay
                }}
                className={`h-full text-[12px] md:text-[16px] font-medium transition-all rounded-full
        ${
          i === activeIndex
            ? "text-white dark:text-[#0D0D0D] bg-[#EA7D00] dark:bg-[#EA7D00] px-3 md:px-6"
            : "text-[#151D48] dark:text-[#D4D4D4] hover:text-[#EA7D00] dark:hover:text-[#F2F2FE] px-3 md:px-6"
        }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Filter + Search + Export */}
          <div className="flex flex-col lg:flex-row gap-2 items-center w-full">
            <div className="flex flex-row gap-3 items-center w-full">
              <div className="flex flex-col gap-1 w-full">
                <h2 className="text-[#333333] dark:text-[#F2F2FE] font-bold text-[16px] lg:text-[18px]">
                  {tabTitles[activeIndex].heading}
                </h2>
                <p className="text-[12px] lg:text-[14px] text-[#666666] dark:text-[#F2F2FE]">
                  {tabTitles[activeIndex].subheading}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-end items-start lg:items-end gap-4 w-full lg:w-auto">
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
              <div className="flex flex-col md:flex-row gap-2 relative w-full">
                {activeIndex !== 1 && (
                  <>
                    <div className="flex flex-row gap-2">
                      <div ref={filterButtonRef}>
                        <ActionButton
                          label="Filter"
                          icon="cuida:filter-outline"
                          buttonClass="flex items-center justify-center gap-1 text-sm h-[40px] w-[100px] px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
                          iconPos="left"
                          onClick={() => {
                            if (!filterOpen) {
                              setTempFilters(filters);
                            }
                            setFilterOpen(!filterOpen);
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
                    </div>
                  </>
                )}
                {activeIndex === 1 && (
                  <>
                    <div className="flex flex-row gap-2">
                      <div ref={filterButtonRef}>
                        <ActionButton
                          label="Filter"
                          icon="cuida:filter-outline"
                          buttonClass="flex items-center justify-center gap-1 text-sm h-[40px] w-[100px] px-4 bg-white text-black dark:bg-[#0D0D0D] dark:text-[#8E8E9C] border border-[#A9A9A9] dark:border-[#8E8E9C] focus:outline-none focus:ring-0"
                          iconPos="left"
                          onClick={() => {
                            if (!filterOpen) {
                              setTempFilters(filters);
                            }
                            setFilterOpen(!filterOpen);
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
                    </div>
                    <div>
                      {" "}
                      <ActionButton
                        label="Add Manufacturer"
                        icon="ic:round-add"
                        iconPos="left"
                        labelClass="font-normal"
                        buttonClass="flex items-center justify-center gap-1 text-sm h-[40px] w-[180px] px-4 bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
                        onClick={addManufacturer}
                      />
                    </div>
                  </>
                )}

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
          </div>

          {/* Custom DataTable */}

          <div className="pt-6 overflow-x-auto w-full ">
            {isLoading ? (
              <div className="space-y-2">
                {/* Skeleton for table header */}
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                {/* Skeleton for table rows */}
                {[...Array(5)].map((_, idx) => (
                  <div
                    key={idx}
                    className="h-8 bg-gray-200 dark:bg-[#EA7D0040] rounded w-full"
                  />
                ))}
              </div>
            ) : (
              <>
                <DataTable
                  value={pagedRows}
                  paginator={false}
                  className="p-datatable-sm w-full my-delete-table [&_.p-datatable-tbody>tr]:dark:!bg-black"
                  rowClassName={() =>
                    "border-b border-[#73779126] text-[13px] text-[#666666] dark:text-[#F2F2FE] dark:bg-black whitespace-nowrap"
                  }
                  emptyMessage={
                    <div className="py-6 text-[15px] bg-white dark:bg-black text-black dark:text-white">
                      No Data.
                    </div>
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
              </>
            )}
          </div>

          {/* Your existing CustomPaginator */}
          <CustomPaginator
            totalPages={Math.ceil(filteredData.length / rowsPerPage)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            maxButtons={5} // keep your current prop or adjust as needed
          />
        </div>
      </PinWrapper>
    </div>
  );
}
