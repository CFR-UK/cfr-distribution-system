import { useModal } from "@/context/ModalContext";
import { Icon } from "@iconify/react";
import { Skeleton } from "primereact/skeleton";
import ActionButton from "../components/ActionButton";
import { useState, useEffect } from "react";
import InitiateTransferModal from "./InitiateTransferModal";

export default function TransferSuccessModal({
  closeModal,
  topHeading = "Transfer Request Created Successfully",
  centerText = "Your request to transfer Product A from warehouse A to warehouse B has been created successfully, you can track it in stock transfer now!",
}) {
  const { openModal, closeModal: closeTransferSuccessModal } = useModal();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2s loading
    return () => clearTimeout(timer);
  }, []);

  const createAnotherRequest = () => {
    closeModal();
    setTimeout(() => {
      openModal(InitiateTransferModal, {
        sizeClass: "w-[85%] md:w-[60%]",
      });
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
          label="Create another request"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="flex items-center justify-center gap-1 h-[50px] w-full px-4 bg-white text-[#EA7D00] dark:bg-[#0D0D0D] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
          onClick={createAnotherRequest}
        />

        {/* Second button (render only if label exists) */}
        <ActionButton
          label="Done"
          labelClass="font-normal text-[12px] md:text-[16px]"
          buttonClass="flex items-center justify-center gap-1 w-full h-[50px] px-1 lg:px-4 bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
          onClick={closeModal}
        />
      </div>
    </div>
  );
}
