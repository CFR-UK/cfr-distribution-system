import Logo from "../Components/Logo";
import { Skeleton } from "primereact/skeleton";
import ActionButton from "../components/ActionButton";
import { useState, useEffect } from "react";
import GenerateInvoiceModal from "./GenerateInvoiceModal";
import { useModal } from "@/context/ModalContext";

const tableData = [
  {
    description: "Brand Design",
    qty: 1,
    discount: 0,
    price: 2000,
    vat: 0.0,
    net: "$2,000.00",
  },
  {
    description: "Website design",
    qty: 1,
    discount: 0,
    price: 3000,
    vat: 0.0,
    net: "$3,000.00",
  },
  {
    description: "Website development",
    qty: 1,
    discount: 0,
    price: 4000,
    vat: 0.0,
    net: "$4,000.00",
  },
];

export default function PreviewInvoiceModal({
  closeModal,
  fromTabIndex = 0,
  restoreStep = null,
  secondButtonLabel = "Download",
  firstButtonLabel = "Back",
}) {
  const [loading, setLoading] = useState(true);

  const { openModal, closeModal: closePreviewInvoiceModal } = useModal();

  const handleFirstButtonClick = () => {
    if (firstButtonLabel.toLowerCase() === "back") {
      closeModal();
      setTimeout(() => {
        openModal(GenerateInvoiceModal, {
          sizeClass: "w-[85%] md:w-[50%]",
          activeTabIndex: fromTabIndex,
          ...(restoreStep !== null && { initialStep: restoreStep }),
        });
      }, 200);
    } else if (firstButtonLabel.toLowerCase() === "cancel") {
      closeModal();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-1 lg:space-y-2 flex flex-col gap-1">
      {/* Header */}
      <div className="flex justify-center mb-3">
        {loading ? (
          <Skeleton
            width="180px"
            height="45px"
            borderRadius="8px"
            className="dark:bg-[#2C2C2CAA]"
          />
        ) : (
          <Logo className="w-[180px] h-[45px]" />
        )}
      </div>
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          {loading ? (
            <>
              <div className="flex flex-col gap-1">
                <div className="w-[60px] lg:w-[120px]">
                  <Skeleton
                    width="100%"
                    height="20px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
                <div className="w-[80px] lg:w-[160px]">
                  <Skeleton
                    width="100%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
                <div className="w-[70px] lg:w-[140px]">
                  <Skeleton
                    width="100%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
                <div className="w-[90px] lg:w-[180px]">
                  <Skeleton
                    width="100%"
                    height="16px"
                    className="dark:bg-[#2C2C2CAA]"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-[11px] lg:text-[24px] font-extrabold lg:font-bold text-[#131330] dark:text-[#CFCFEC]">
                Sales Invoice: S1 4260
              </h1>
              <p className="dark:text-[#8E8E9C] text-[#8E8E9C] text-[8px] lg:text-[16px] mt-3">
                CFR Management Services
              </p>
              <p className="dark:text-[#8E8E9C] text-[#8E8E9C] text-[8px] lg:text-[16px]">
                REG: 123001023000
              </p>
              <p className="dark:text-[#8E8E9C] text-[#8E8E9C] text-[8px] lg:text-[16px] whitespace-nowrap">
                hi@blocksdesign.co | +64 123 1234 123
              </p>
            </>
          )}
        </div>
        <div className="text-right space-y-1">
          {loading ? (
            <>
              <div className="w-[50px] lg:w-[100px]">
                <Skeleton
                  width="100%"
                  height="16px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              </div>
              <div className="w-[90px] lg:w-[180px]">
                <Skeleton
                  width="100%"
                  height="14px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              </div>
              <div className="w-[90px] lg:w-[180px]">
                <Skeleton
                  width="100%"
                  height="14px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              </div>
              <div className="w-[90px] lg:w-[180px]">
                <Skeleton
                  width="100%"
                  height="14px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              </div>
              <div className="w-[90px] lg:w-[180px]">
                <Skeleton
                  width="100%"
                  height="14px"
                  className="dark:bg-[#2C2C2CAA]"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-end gap-x-2 text-[8px] lg:text-[16px]">
                <span className="text-[#131330] dark:text-[#CFCFEC]">To:</span>
                <span className="text-[#EA7D00] font-medium">
                  Health Co Pvt Ltd
                </span>
              </div>

              <div className="grid grid-cols-[min-content_auto] gap-x-1 md:gap-x-6 text-[8px] lg:text-[14px] text-[#8E8E9C] dark:text-[#8E8E9C]">
                <span className="whitespace-nowrap">INVOICE NUMBER:</span>
                <span className="whitespace-nowrap font-normal md:font-medium text-[#131330] dark:text-[#CFCFEC]">
                  INV-0002
                </span>

                <span className="whitespace-nowrap">INVOICE DATE:</span>
                <span className="whitespace-nowrap font-normal md:font-medium text-[#131330] dark:text-[#CFCFEC]">
                  02 Jan 2023
                </span>

                <span className="whitespace-nowrap">DUE:</span>
                <span className=" whitespace-nowrapfont-normal md:font-medium text-[#131330] dark:text-[#CFCFEC]">
                  20 Jan 2023
                </span>

                <span className="whitespace-nowrap">REFERENCE:</span>
                <span className="whitespace-nowrap font-normal md:font-medium text-[#131330] dark:text-[#CFCFEC]">
                  324553453
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Editable Table */}
      {loading ? (
        <div className="space-y-2 mt-5">
          {[...Array(3)].map((_, idx) => (
            <Skeleton
              key={idx}
              width="100%"
              height="40px"
              borderRadius="4px"
              className="dark:bg-[#2C2C2CAA]"
            />
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <table className="w-full mt-6 border">
            <thead>
              {/* <tr className=""> */}
              <tr className="text-[5px] lg:text-[12px] text-[#131330] dark:text-[#CFCFEC]">
                <th className="text-left p-2 lg:pr-40 font-normal">
                  Description
                </th>
                <th className="p-2 font-normal text-center">Qty</th>
                <th className="p-2 font-normal text-center">Discount</th>
                <th className="p-2 font-normal text-center">Price</th>
                <th className="p-2 font-normal text-center">VAT</th>
                <th className="p-2 font-normal text-center">Net</th>
              </tr>
              {/* </tr> */}
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr
                  key={i}
                  className="border-t text-[5px] lg:text-[12px] text-[#131330] dark:text-[#CFCFEC]"
                >
                  <td className="p-2">
                    <input
                      type="text"
                      defaultValue={row.description}
                      className="w-full bg-transparent focus:outline-none text-left"
                    />
                  </td>
                  <td className="p-2 lg:pl-6">
                    <input
                      type="number"
                      defaultValue={row.qty}
                      className="w-full bg-transparent focus:outline-none text-center"
                    />
                  </td>
                  <td className="p-2 lg:pl-6">
                    <input
                      type="number"
                      defaultValue={row.discount}
                      className="w-full bg-transparent focus:outline-none text-center"
                    />
                  </td>
                  <td className="p-2 lg:pl-6">
                    <input
                      type="number"
                      defaultValue={row.price}
                      className="w-full bg-transparent focus:outline-none text-center"
                    />
                  </td>
                  <td className="p-2 lg:pl-6">
                    <input
                      type="number"
                      defaultValue={row.vat}
                      className="w-full bg-transparent focus:outline-none text-center"
                    />
                  </td>
                  <td className="p-2 lg:pl-6 text-center">{row.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Summary */}
      {loading ? (
        <div className="bg-[#F2F2FE] dark:bg-[#141414] p-4 rounded-xl space-y-2">
          {[...Array(3)].map((_, idx) => (
            <Skeleton
              key={idx}
              width="100%"
              height="20px"
              borderRadius="4px"
              className="dark:bg-[#2C2C2CAA]"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full bg-[#F2F2FEAA] dark:bg-[#141414CC] p-4 rounded-xl">
          <div className="flex justify-between items-center w-full ">
            <p className="text-[#131330AA] dark:text-[#CFCFECAA] text-[14px]">
              VAT
            </p>
            <p className="text-[#131330AA] dark:text-[#CFCFECAA] text-[14px]">
              $6,000.00
            </p>
          </div>
          <div className="flex justify-between items-center w-full ">
            <p className="text-[#131330AA] dark:text-[#CFCFECAA] text-[14px]">
              Net:
            </p>
            <p className="text-[#131330AA] dark:text-[#CFCFECAA] text-[14px]">
              $0.00
            </p>
          </div>
          <div className="flex justify-between items-center w-full ">
            <p className="text-[#131330AA] dark:text-[#CFCFECAA] text-[14px] font-semibold">
              Total
            </p>
            <p className="text-[#131330AA] dark:text-[#CFCFECAA] text-[14px] font-semibold">
              $6,000.00
            </p>
          </div>
        </div>
      )}

      {/* Buttons */}
      {loading ? (
        <>
          <div className="flex flex-row gap-2 w-full">
            <Skeleton height="25px" className="w-full dark:bg-[#2C2C2CAA]" />
            <Skeleton height="25px" className="w-full dark:bg-[#2C2C2CAA]" />
          </div>
        </>
      ) : (
        <div className="flex flex-row gap-4">
          <div className="w-full gap-1">
            <ActionButton
              label={firstButtonLabel}
              labelClass="font-normal text-[12px] md:text-[16px]"
              buttonClass="flex items-center justify-center gap-1 text-sm h-[50px] w-full px-4 bg-white text-[#EA7D00] dark:bg-[#0D0D0D] dark:text-[#EA7D00] border border-[#EA7D00] focus:outline-none focus:ring-0"
              onClick={handleFirstButtonClick}
            />
          </div>
          <div className="w-full gap-1">
            <ActionButton
              label={secondButtonLabel}
              labelClass="font-normal text-[12px] md:text-[16px]"
              buttonClass="flex items-center justify-center gap-1 text-sm w-full h-[50px] px-4 bg-[#EA7D00] text-white dark:bg-[#EA7D00] dark:text-black border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
