// DiscountViewDetails.jsx
import React from "react";
import DiscountViewDetailsData from "@/components/DiscountViewDetailsData.jsx";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function DiscountViewDetails() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-1 pl-3 pr-3 pt-4 bg-gray-50 dark:bg-[#141414]">
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
        <DiscountViewDetailsData />
      </div>
    </>
  );
}
