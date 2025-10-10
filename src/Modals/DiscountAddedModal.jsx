import { useModal } from "@/context/ModalContext";
import { Icon } from "@iconify/react";
import { Skeleton } from "primereact/skeleton";
import ActionButton from "../components/ActionButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DiscountAddedModal({
  closeModal,
  topHeading = "Discount Added Successfully!",
  centerText = 'The discount for "Milk 5 Chocolate 6x20" has been saved and will be active from 10 Jul 2025 to 30 Jul 2025.',
}) {
  const { openModal } = useModal();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const addAnotherDiscount = () => {
    closeModal();
    setTimeout(() => {
      navigate("/add-discount");
    }, 200);
  };

  const goToDiscountList = () => {
    closeModal();
    setTimeout(() => {
      navigate("/discount");
    }, 200);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center space-y-3">
        {/* Icon + text */}
        <div className="flex flex-col gap-2 items-center text-center">
          <Skeleton
            shape="circle"
            size="100px"
            className="mb-2 dark:bg-[#2C2C2CAA]"
          />
          {/* Title skeleton */}
          <Skeleton
            width="15rem"
            height="1.5rem"
            className="mb-2 dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="16rem"
            height="1rem"
            className="dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="12rem"
            height="1rem"
            className="dark:bg-[#2C2C2CAA]"
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-row w-full justify-between mt-4 gap-2">
          <Skeleton
            width="90%"
            height="3.125rem"
            className="rounded-md dark:bg-[#2C2C2CAA]"
          />
          <Skeleton
            width="90%"
            height="3.125rem"
            className="rounded-md dark:bg-[#2C2C2CAA]"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex flex-col gap-1 items-center text-center">
        <Icon
          icon="charm:circle-tick"
          className="w-[100px] h-[100px] text-[#20BF55]"
        />
        <div className=" text-[20px] font-bold text-[#151D48] dark:text-[#F2F2FE]">
          {topHeading}
        </div>
        <p className="text-[16px] text-[#737791]">{centerText}</p>
      </div>
      <div className="flex flex-row w-full justify-between mt-4 gap-2">
        <ActionButton
          label="Add Another"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="flex items-center justify-center gap-1 h-[50px] w-full px-4 bg-white text-[#EA7D00] dark:bg-[#0D0D0D] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
          onClick={addAnotherDiscount}
        />
        <ActionButton
          label="Go to Discount List"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="flex items-center justify-center gap-1 w-full h-[50px] px-1 lg:px-4 bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
          onClick={goToDiscountList}
        />
      </div>
    </div>
  );
}
