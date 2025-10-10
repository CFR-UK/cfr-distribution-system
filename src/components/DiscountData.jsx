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
import CustomPaginator from "./CustomPaginator";
import FilterCalendar from "./FilterCalendar";
import PinWrapper from "./PinWrapper";

const tabTitles = [
  {
    heading: "Manage Product Discounts",
    subheading:
      "Create and manage product-level discounts, including promo pricing, quantity-based discounts, and limited-time offers.",
  },
];

const dataSets = [
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Summer Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
  {
    discountName: "Winter Mega Sale",
    noOfProducts: "5",
    createdOn: "2024-11-25",
    action: "View Details",
  },
];

const filterableColumns = ["discountName", "dateRange"];

export default function DiscountData() {
  const exportMenuOptions = menuOptions(["CSV", "Excel"]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  //   table skeleton
  const DiscountTableSkeleton = () => (
    <div className="pt-4">
      <div className="bg-white dark:bg-[#000000] rounded-lg p-4 h-auto">
        <div className="flex flex-col md:flex-row gap-2 items-center w-full">
          {/* Left Section (Title + Subheading) */}
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

          {/* Right Section (Search + Buttons) */}
          <div className="flex flex-col md:flex-row justify-end items-start lg:items-end gap-4 w-full">
            {/* SearchBox */}
            <Skeleton
              width="250px"
              height="36px"
              borderRadius="9999px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <div className="flex flex-row gap-4">
              <Skeleton
                width="100px"
                height="40px"
                borderRadius="12px"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="104px"
                height="40px"
                borderRadius="12px"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>
        </div>

        {/* DataTable */}
        <div className="pt-6 overflow-x-auto w-full">
          {[...Array(7)].map((_, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-row gap-4 border-b border-[#73779126] py-2 justify-between"
            >
              {[...Array(9)].map((_, colIdx) => (
                <Skeleton
                  key={colIdx}
                  width="100px"
                  height="20px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Paginator */}
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(5)].map((_, idx) => (
            <Skeleton
              key={idx}
              width="32px"
              height="32px"
              borderRadius="8px"
              className="dark:bg-[#2C2C2CAA]"
            />
          ))}
        </div>
      </div>
    </div>
  );

  // row wise component
  const DiscountTable = () => {
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
        discountName: [
          ...new Set(rawData.map((r) => r.discountName).filter(Boolean)),
        ],
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

    const columns = useMemo(() => [
      { field: "discountName", header: "Discount Name" },
      { field: "noOfProducts", header: "No. of Products" },
      { field: "createdOn", header: "Created On" },
      {
        field: "action",
        header: "Action",
        body: (rowData) => (
          <ActionButton
            label="View Details"
            icon="hugeicons:view"
            buttonClass="focus:outline-none focus:ring-0 w-[110px] h-[28px] flex items-center gap-1 px-3 py-1 bg-[#EA7D00] hover:bg-[#CC6600] text-white text-[12px] rounded dark:text-[#0D0D0D] dark:bg-[#EA7D00]"
            iconPos="left"
            onClick={() => navigate("/DiscountViewDetails")}
          />
        ),
      },
    ]);

    //filter logic
    const parseRowDate = (dateStr) => {
      if (!dateStr) return null;

      // Extract only numbers and "-" (ignore letters like "s")
      const cleaned = dateStr.match(/\d+-\d+-\d+/)?.[0];
      if (!cleaned) return null;

      const [year, month, day] = cleaned.split("-").map(Number);
      return new Date(year, month - 1, day); // month is 0-based
    };

    const filteredData = useMemo(() => {
      // Normalize start/end dates to cover full day
      const startDate = dateRange[0]?.startDate
        ? new Date(dateRange[0].startDate.setHours(0, 0, 0, 0))
        : null;

      const endDate = dateRange[0]?.endDate
        ? new Date(dateRange[0].endDate.setHours(23, 59, 59, 999))
        : null;

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
                val
                  .toString()
                  .toLowerCase()
                  .includes(globalFilter.toLowerCase())
            )
          : true;

        // 3️⃣ Date filter (ignore time)
        let passesDateFilter = true;
        if (startDate && endDate && row.createdOn) {
          const rowDate = parseRowDate(row.createdOn); // <-- parse orderDate
          if (!rowDate || rowDate < startDate || rowDate > endDate) {
            passesDateFilter = false;
          }
        }

        return passesCheckboxFilter && passesSearch && passesDateFilter;
      });
    }, [rawData, filters, globalFilter, dateRange]);

    // pagination
    const pagedRows = filteredData.slice(
      currentPage * rowsPerPage,
      currentPage * rowsPerPage + rowsPerPage
    );
    const totalPages = Math.max(
      1,
      Math.ceil(filteredData.length / rowsPerPage)
    );

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
    return (
      <div className="pt-4">
        <div className="bg-white dark:bg-[#000000] rounded-lg p-4 h-auto">
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
                  onChange={(e) => setGlobalFilter(e.target.value)}
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
                        setTempFilters(filters || {});
                        setTempDateRange(
                          dateRange || [
                            {
                              startDate: null,
                              endDate: null,
                              key: "selection",
                            },
                          ]
                        );
                      }
                      setFilterOpen((v) => !v);
                    }}
                  />
                </div>

                <ActionButton
                  label="Add Discount"
                  icon="mdi:plus-circle"
                  iconPos="left"
                  buttonClass="flex items-center justify-center gap-1 text-sm h-[40px] w-[160px] px-4 bg-[#EA7D00] hover:bg-[#CC6600] text-white dark:bg-[#EA7D00] dark:text-black border-none rounded focus:outline-none focus:ring-0"
                  onClick={() => navigate("/add-discount")}
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
          </div>

          {/* Your existing CustomPaginator */}
          <CustomPaginator
            totalPages={Math.ceil(filteredData.length / rowsPerPage)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            maxButtons={5} // keep your current prop or adjust as needed
          />
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <>
        <div className="pt-4 space-y-4 relative">
          {/* table skeleton */}
          <DiscountTableSkeleton />
        </div>
      </>
    );
  }
  return (
    <div className="pt-4 space-y-4 relative">
      {/*Table */}
      <PinWrapper
        id="discount-table-row"
        meta={{ component: DiscountTable }}
        skeleton={<DiscountTableSkeleton />}
      >
        <DiscountTable />
      </PinWrapper>
    </div>
  );
}
