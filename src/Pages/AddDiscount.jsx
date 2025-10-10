import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import MultiSelectDropdown from "../components/MultiSelectDropdown";
import DateField from "../components/DateField";
import DiscountAddedModal from "../Modals/DiscountAddedModal";
import { useModal } from "@/context/ModalContext";
import ActionButton from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

export default function AddDiscount() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // show skeleton
    const timer = setTimeout(() => setIsLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  // state for all fields
  const [discountName, setDiscountName] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [product, setProduct] = useState("");
  const [discountType, setDiscountType] = useState("percentage"); // default Percentage
  const [purchaseReq, setPurchaseReq] = useState("none");
  const [applyTo, setApplyTo] = useState("selected"); // default Selected Customers
  const [invoiceDate, setInvoiceDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [customers, setCustomers] = useState([]);
  const { openModal, closeModal } = useModal();

  // reset all
  const handleReset = () => {
    setDiscountName("");
    setProduct("");
    setDiscountPercentage("");
    setDiscountType("percentage");
    setPurchaseReq("none");
    setApplyTo("selected");
    setInvoiceDate(null);
    setDueDate(null);
    setCustomers([]);
  };
  const SaveDiscount = () => {
    openModal(DiscountAddedModal, {
      sizeClass: "w-[85%] md:w-[50%]",
    });
  };

  if (isLoading) {
    return (
      <div className="w-full bg-[#F9FAFB] dark:bg-[#141414] min-h-screen p-6">
        {/* Back button */}
        <div className="flex flex-row justify-between items-center mb-4 gap-2">
          <Skeleton
            width="5rem"
            height="1.25rem"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>

        <div className="bg-white dark:bg-black rounded-xl shadow-sm p-6 space-y-6 max-w-5xl">
          {/* Discount Name */}
          <div>
            <Skeleton
              width="8rem"
              height="1rem"
              className="mb-2 dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100%"
              height="2.5rem"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Select Product */}
          <div>
            <Skeleton
              width="8rem"
              height="1rem"
              className="mb-2 dark:bg-[#2C2C2CAA]"
            />
            <div className="flex gap-2">
              <Skeleton
                width="100%"
                height="2.5rem"
                className="flex-1 dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="6rem"
                height="2.5rem"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>

          {/* Discount Type */}
          <div>
            <Skeleton
              width="7rem"
              height="1rem"
              className="mb-2 dark:bg-[#2C2C2CAA]"
            />
            <div className="flex gap-6">
              <Skeleton
                width="6rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="6rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>

          {/* Discount in Percentage */}
          <div>
            <Skeleton
              width="10rem"
              height="1rem"
              className="mb-2 dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100%"
              height="2.5rem"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Minimum purchase requirements */}
          <div>
            <Skeleton
              width="13rem"
              height="1rem"
              className="mb-2 dark:bg-[#2C2C2CAA]"
            />
            <div className="flex gap-6">
              <Skeleton
                width="10rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="13rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="14rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>

          {/* Start Date & End Date */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col w-full gap-1 pl-1">
              <Skeleton
                width="6rem"
                height="1rem"
                className="mb-2 dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="100%"
                height="2.5rem"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
            <div className="flex flex-col w-full gap-1 pl-1">
              <Skeleton
                width="6rem"
                height="1rem"
                className="mb-2 dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="100%"
                height="2.5rem"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>

          {/* Apply to */}
          <div>
            <Skeleton
              width="5rem"
              height="1rem"
              className="mb-2 dark:bg-[#2C2C2CAA]"
            />
            <div className="flex gap-6">
              <Skeleton
                width="3rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="10rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
              <Skeleton
                width="9rem"
                height="1.25rem"
                className="dark:bg-[#2C2C2CAA]"
              />
            </div>
          </div>

          {/* Select Customer */}
          <div>
            <Skeleton
              width="8rem"
              height="1rem"
              className="mb-2 dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="100%"
              height="2.5rem"
              className="dark:bg-[#2C2C2CAA]"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 pt-4">
            <Skeleton
              width="50%"
              height="2.75rem"
              className="rounded-md dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              width="50%"
              height="2.75rem"
              className="rounded-md dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F9FAFB] dark:bg-[#141414] min-h-screen p-6">
      {/* Back button */}
      <div className="flex flex-row justify-between items-center mb-4 gap-2">
        {/* Back button */}
        <h1
          className="text-[#EA7D00] text-[14px] flex flex-row items-center gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <Icon icon="ion:arrow-back-outline" />
          Back
        </h1>
      </div>

      <div className="bg-white dark:bg-black rounded-xl shadow-sm p-6 space-y-6 max-w-5xl">
        {/* Discount Name */}
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-[#A9A9CD]">
            Discount Name
          </label>
          <input
            type="text"
            value={discountName}
            onChange={(e) => setDiscountName(e.target.value)}
            className="w-full border dark:border-[#A9A9CD] dark:border dark:border-[#A9A9CD]-[#A9A9CD] rounded-md dark:bg-black px-3 py-2 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Select Product */}
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-[#A9A9CD]">
            Select Product
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search product by name, type, etc..."
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="flex-1 border dark:border-[#A9A9CD] dark:bg-black rounded-md px-3 py-2 focus:outline-none focus:ring-0 "
            />
            <button className="border dark:border-[#A9A9CD] dark:border-[#A9A9CD]-[#EA7D00] text-[#EA7D00] px-4 py-2 rounded-md hover:bg-[#EA7D00] hover:text-white transition">
              Browse
            </button>
          </div>
        </div>

        {/* Discount Type */}
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-[#A9A9CD] ">
            Discount Type
          </label>
          <div className="flex items-center gap-6 accent-[#EA7D00]">
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="discountType"
                value="promo"
                checked={discountType === "promo"}
                onChange={(e) => setDiscountType(e.target.value)}
              />
              Promo Price
            </label>
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="discountType"
                value="percentage"
                checked={discountType === "percentage"}
                onChange={(e) => setDiscountType(e.target.value)}
              />
              Percentage
            </label>
          </div>
        </div>

        {/* Discount in Percentage */}
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-[#A9A9CD]">
            Discount in Percentage
          </label>
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            className="w-full border dark:border-[#A9A9CD] dark:bg-black rounded-md px-3 py-2 focus:outline-none focus:ring-0 "
          />
        </div>

        {/* Minimum purchase requirements */}
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-[#A9A9CD]">
            Minimum purchase requirements
          </label>
          <div className="flex items-center gap-6 accent-[#EA7D00]">
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="purchaseReq"
                value="none"
                checked={purchaseReq === "none"}
                onChange={(e) => setPurchaseReq(e.target.value)}
              />
              No minimum requirement
            </label>
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="purchaseReq"
                value="amount"
                checked={purchaseReq === "amount"}
                onChange={(e) => setPurchaseReq(e.target.value)}
              />
              Minimum Purchase amount
            </label>
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="purchaseReq"
                value="quantity"
                checked={purchaseReq === "quantity"}
                onChange={(e) => setPurchaseReq(e.target.value)}
              />
              Minimum quantity of items
            </label>
          </div>
        </div>

        {/* Start Date & End Date */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col w-full gap-1 pl-1">
            <DateField
              label="Start Date"
              placeholder="Select date"
              value={invoiceDate}
              onChange={(date) => setInvoiceDate(date)}
            />
          </div>
          <div className="flex flex-col w-full gap-1 pl-1">
            <DateField
              label="End Date"
              placeholder="Select date"
              value={dueDate}
              onChange={(date) => setDueDate(date)}
            />
          </div>
        </div>

        {/* Apply to */}
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-[#A9A9CD]">
            Apply to:
          </label>
          <div className="flex items-center gap-6 accent-[#EA7D00]">
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="applyTo"
                value="all"
                checked={applyTo === "all"}
                onChange={(e) => setApplyTo(e.target.value)}
              />
              All
            </label>
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="applyTo"
                value="selected"
                checked={applyTo === "selected"}
                onChange={(e) => setApplyTo(e.target.value)}
              />
              Selected Customers
            </label>
            <label className="flex items-center gap-2 dark:text-[#A9A9CD]">
              <input
                type="radio"
                name="applyTo"
                value="channels"
                checked={applyTo === "channels"}
                onChange={(e) => setApplyTo(e.target.value)}
              />
              Specific Channels
            </label>
          </div>
        </div>

        {/* Select Customer */}
        <MultiSelectDropdown
          label="Select customer"
          value={customers}
          onChange={setCustomers}
        />

        {/* Buttons */}
        <div className="flex justify-between gap-4 pt-4">
          <ActionButton
            label="Reset"
            labelClass="font-normal text-[14px] md:text-[16px]"
            buttonClass="flex-1 border dark:border-[#A9A9CD] border dark:border-[#A9A9CD]-[#EA7D00] text-[#EA7D00] py-2 rounded-md transition"
            onClick={handleReset}
          />
          <ActionButton
            label="Save Discount"
            labelClass="font-normal text-[14px] md:text-[16px]"
            buttonClass="flex-1 bg-[#EA7D00] dark:text-black text-white py-2 rounded-md hover:opacity-90 transition"
            onClick={SaveDiscount}
          />
        </div>
      </div>
    </div>
  );
}
