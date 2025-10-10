import AddManufacturerOrderModal from "./AddManufacturerOrderModal";
import { useModal } from "@/context/ModalContext";
import { Icon } from "@iconify/react";
import { Skeleton } from "primereact/skeleton";
import ActionButton from "../components/ActionButton";
import { useState, useEffect } from "react";
import ManufacturerOrderSummaryModal from "./ManufacturerOrderSummaryModal";

const Manufacturer = [
  {
    id: 1,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 2,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 3,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 4,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 5,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 6,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 7,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 8,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 9,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 10,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
  {
    id: 11,
    label: "Felfoldi Confectionery Ltd.",
    subText: "John Wick",
    available: true,
    order: 14,
  },
];

export default function ManufacturerSelectionModal({ closeModal }) {
  const { openModal, closeModal: closeManufacturerSelectionModal } = useModal();
  const [search, setSearch] = useState("");

  const [isLoading, setLoading] = useState(true);

  const [selectedManufacturer, setSelectedManufacturer] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2s loading
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredManufacturers = Manufacturer.filter(
    (m) =>
      m.label.toLowerCase().includes(search.toLowerCase()) ||
      m.subText.toLowerCase().includes(search.toLowerCase())
  );

  const handleBack = () => {
    closeModal();
    setTimeout(() => {
      openModal(AddManufacturerOrderModal, {
        sizeClass: "w-[85%] md:w-[60%]",
      });
    }, 200);
  };

  const handleNext = () => {
    closeModal();
    setTimeout(() => {
      openModal(ManufacturerOrderSummaryModal, {
        sizeClass: "w-[85%] md:w-[60%]",
      });
    }, 200);
  };

  if (isLoading) {
    return (
      <>
        <div className="space-y-3">
          {/* Header Skeleton */}
          <div className="flex flex-row gap-2">
            <Skeleton
              width="200px"
              height="24px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Search Label Skeleton */}
          <div className="flex flex-row justify-between items-end gap-4">
            <Skeleton
              width="120px"
              height="12px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Search Input Skeleton */}
          <div className="relative flex flex-row items-center justify-between w-full">
            <Skeleton
              width="100%"
              height="40px"
              borderRadius="8px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Manufacturer Title Skeleton */}
          <div className="flex flex-row justify-between w-full">
            <Skeleton
              width="180px"
              height="16px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Manufacturer Options Skeleton */}
          <div className="flex flex-col gap-4 w-full max-h-[52vh] pr-3">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 rounded-lg border border-[#A9A9CD] bg-white dark:bg-[#0D0D0D] h-[64px] gap-3"
                >
                  {/* Radio Circle */}
                  <Skeleton
                    shape="circle"
                    width="20px"
                    height="20px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                  {/* Manufacturer Name + Subtext */}
                  <div className="flex flex-col gap-2 flex-1">
                    <Skeleton
                      width="70%"
                      height="14px"
                      className="dark:bg-[#2C2C2CAA]"
                    />
                    <Skeleton
                      width="40%"
                      height="12px"
                      className="dark:bg-[#2C2C2CAA]"
                    />
                  </div>
                  {/* Orders Section */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Skeleton
                      width="24px"
                      height="14px"
                      className="dark:bg-[#2C2C2CAA]"
                    />
                    <Skeleton
                      width="60px"
                      height="10px"
                      className="dark:bg-[#2C2C2CAA]"
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Back + Next Button Skeleton */}
          <div className="flex flex-row gap-4">
            <Skeleton
              width="100%"
              height="48px"
              borderRadius="8px"
              className="dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100%"
              height="48px"
              borderRadius="8px"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex flex-row gap-2">
        <div className=" text-[20px] font-bold text-[#151D48] dark:text-[#F2F2FE]">
          Manufacturer Selection
        </div>
      </div>

      <div className="flex flex-row justify-between items-end gap-4">
        <div className="flex whitespace-nowrap">
          <label className="text-[10px] font-normal text-[#737791] dark:text-[#737791]">
            Search Manufacturer
          </label>
        </div>
      </div>

      <div className="relative flex flex-row items-center justify-between w-full">
        <input
          className="dark:bg-[#0D0D0D] w-full border border-[#EA7D00] rounded-lg py-2 pl-3 focus:outline-none focus:ring-1 focus:ring-[#EA7D00] text-[14px] text-[#737791] dark:text-[#737791] hover:shadow-md transition-shadow duration-200 dark:hover:[box-shadow:0_3px_10px_rgba(255,255,255,0.2)]"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <Icon
          icon="mdi:magnify"
          className="absolute top-3 right-3 text-[#EA7D00] text-lg"
        />
      </div>

      <div className="flex flex-row justify-between w-full">
        <div className="text-[14px] text-[#151D48] dark:text-[#F2F2FE] font-semibold pt-2">
          Manufacturer{" "}
          <span className="text-[12px] font-normal text-[#737791] dark:text-[#737791]">
            (Showing {filteredManufacturers.length})
          </span>
        </div>
      </div>

      {/* manufacturer Options */}
      <div className="flex flex-col gap-4 w-full max-h-[52vh] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#8E8E9C2E] scrollbar-track-[#F2F2FE] dark:scrollbar-thumb-[#8E8E9C2E] dark:scrollbar-track-[#141414]">
        {filteredManufacturers.length > 0 ? (
          filteredManufacturers.map((option) => (
            <div
              key={option.id}
              className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all h-[64px] ${
                selectedManufacturer === option.id
                  ? "border-[#EA7D00] bg-[#EA7D000F] dark:bg-[#0D0D0D]"
                  : "border-[#A9A9CD] bg-white dark:border-[#A9A9CD] dark:bg-[#0D0D0D]"
              }`}
              onClick={() => setSelectedManufacturer(option.id)}
            >
              <input
                type="radio"
                name="shipping"
                checked={selectedManufacturer === option.id}
                onChange={() => setSelectedManufacturer(option.id)}
                className="accent-[#EA7D00] mr-3"
              />
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[10px] md:text-[14px] text-[#131330] dark:text-[#F2F2FE] whitespace-nowrap">
                    {option.label}
                  </p>
                  <p className="font-normal text-[8px] md:text-[10px] text-[#737791] dark:text-[#737791]">
                    {option.subText}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[#131330] text-[10px] font-medium text-center">
                    {option.order}
                  </p>
                  <p className="text-[#737791] text-[8px] md:text-[10px] whitespace-nowrap">
                    Previous Orders
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-[#737791] dark:text-[#737791] py-6">
            No manufacturers found
          </p>
        )}
      </div>

      {/* Next Button */}
      <div className="flex flex-row gap-4">
        <ActionButton
          label="Back"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="text-[16px] h-[48px] w-full bg-white dark:bg-[#0D0D0D] text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
          onClick={handleBack}
        />
        <ActionButton
          label="Next"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="text-[16px] h-[48px] w-full bg-[#EA7D00] dark:bg-[#EA7D00] text-white dark:text-black focus:outline-none focus:ring-0"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
