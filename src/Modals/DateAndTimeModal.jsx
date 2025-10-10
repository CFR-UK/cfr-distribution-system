import { useModal } from "@/context/ModalContext";
import "../index.css";
import OrderCreatedModal from "./OrderCreatedModal";
import OrderSummaryModal from "./OrderSummaryModal";
import { Icon } from "@iconify/react";
import { Skeleton } from "primereact/skeleton";
import ActionButton from "../components/ActionButton";
import { useState, useEffect } from "react";
import DateField from "../components/DateField";
import { InputTextarea } from "primereact/inputtextarea";
import TimePicker from "../components/TimePicker";

export default function DateAndTimeModal({ closeModal }) {
  const { openModal, closeModal: closeDateAndAddressModal } = useModal();

  const [deliveryDate, setDeliveryDate] = useState(null);
  const [time, setTime] = useState(null);
  const [orderNotes, setOrderNotes] = useState(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2s loading
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    closeModal();
    setTimeout(() => {
      openModal(OrderSummaryModal, {
        sizeClass: "w-[85%] md:w-[60%]",
      });
    }, 200);
  };

  const handleNext = () => {
    closeModal();
    setTimeout(() => {
      openModal(OrderCreatedModal, {
        sizeClass: "w-[85%] md:w-[50%]",
        topHeading: "Order Created Successfully",
        centerText:
          "Your DN #74365734 has been created successfully, you can check it in order management now!",
      });
    }, 200);
  };

  if (isLoading) {
    return (
      <div className="space-y-3">
        {/* Header Skeleton */}
        <div className="flex flex-row gap-2">
          <Skeleton
            width="32px"
            height="32px"
            borderRadius="50%"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="120px"
            height="24px"
            className="rounded-md dark:bg-[#2C2C2CAA]"
          />
        </div>

        {/* Field - row 1 skeleton */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex flex-col w-full gap-1 pl-1">
            <Skeleton
              width="140px"
              height="12px"
              className="mb-1 dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              height="40px"
              className="rounded-lg dark:bg-[#2C2C2CAA]"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <Skeleton
              width="100px"
              height="12px"
              className="mb-1 dark:bg-[#2C2C2CAA]"
            />
            <Skeleton
              height="40px"
              className="rounded-lg dark:bg-[#2C2C2CAA]"
            />
          </div>
        </div>

        {/* Field - row 2 skeleton */}
        <div className="flex flex-col gap-1 mb-4 pl-1">
          <Skeleton
            width="160px"
            height="12px"
            className="mb-1 dark:bg-[#2C2C2CAA]"
          />
          <Skeleton height="70px" className="rounded-lg dark:bg-[#2C2C2CAA]" />
        </div>

        {/* Button skeleton */}
        <Skeleton height="48px" className="rounded-md dark:bg-[#2C2C2CAA]" />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* header */}
      <div className="flex flex-row gap-2">
        <button onClick={handleBack} className="p-1">
          <Icon
            icon="fe:arrow-left"
            width="18px"
            height="18px"
            className="text-[#151D48] dark:text-[#F2F2FE]"
          />
        </button>
        <div className=" text-[20px] font-bold text-[#151D48] dark:text-[#F2F2FE]">
          Date & Time
        </div>
      </div>
      {/* field - row 1 */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="flex flex-col w-full gap-1 pl-1">
          <DateField
            label="Select Delivery Date"
            value={deliveryDate}
            onChange={(date) => setDeliveryDate(date)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="block text-[12px] text-[#737791] dark:text-[#A9A9CD]">
            Select Time
          </label>
          <TimePicker value={time} onChange={setTime} />
        </div>
      </div>

      {/* Field - row 2 */}
      <div className="flex flex-col gap-1 mb-4 pl-1">
        <label
          htmlFor="orderNotes"
          className="text-[12px] text-[#737791] dark:text-[#A9A9CD]"
        >
          Order Notes(Optional)
        </label>
        <InputTextarea
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
          rows={4}
          cols={100}
          placeholder="Add any specific notes or instructions related to the order."
          className="h-[70px] pt-1 pl-3 pr-3 text-[14px] dark:bg-[#0D0D0D] border border-[#73779140] dark:border-[#A9A9CD] rounded-lg dark:text-[#A9A9CD] focus:outline-none focus:ring-1 focus:ring-[#B9B9FB] hover:shadow-md transition-shadow duration-200 dark:hover:[box-shadow:0_3px_10px_rgba(255,255,255,0.2)]"
        />
      </div>

      {/* Button */}
      <div className="mt-2 flex flex-row gap-4">
        <ActionButton
          label="Back"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="flex items-center justify-center gap-1 text-[16px] h-[50px] w-full px-4 bg-white text-[#EA7D00] dark:bg-[#0D0D0D] border border-[#EA7D00] focus:outline-none focus:ring-0"
          onClick={handleBack}
        />
        <ActionButton
          label="Next"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="flex items-center justify-center gap-1 text-[16px] h-[50px] w-full px-4 bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-[#0D0D0D] focus:outline-none focus:ring-0"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
