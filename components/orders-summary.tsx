"use client";

import React from "react";
import { motion } from "motion/react";
import ProductDetails from "./product-details";
import { TicketIcon } from "./icons/ticket";

const OrderSummary = () => {
  const [showOrderSummary, setShowOrderSummary] = React.useState(false);

  return (
    <div className="p-6 md:px-45">
      <div>
        <div className="bg-gray-50 rounded-lg px-4 py-3">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowOrderSummary(!showOrderSummary)}
            >
              <p className="font-bold text-base/loose tracking-wide transition duration-300 font-satoshi">
                {showOrderSummary ? "Hide order Summary" : "Show order Summary"}
              </p>
              <span
                className={`transition-transform duration-400 ${
                  showOrderSummary ? "" : "rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_4418_8086)">
                    <path
                      d="M18.6801 13.9802L15.4701 10.7702L13.5101 8.80023C12.6801 7.97023 11.3301 7.97023 10.5001 8.80023L5.32007 13.9802C4.64007 14.6602 5.13007 15.8202 6.08007 15.8202H11.6901H17.9201C18.8801 15.8202 19.3601 14.6602 18.6801 13.9802Z"
                      fill="none"
                      className="fill-gray-400"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4418_8086">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <span className="text-gray-900 font-bold text-base/loose">
              $59.00
            </span>
          </div>
          <motion.div
            initial={{ opacity: showOrderSummary ? 1 : 0, height: 0 }}
            animate={{
              opacity: showOrderSummary ? 1 : 0,
              height: showOrderSummary ? "auto" : 0,
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
              {Array.from({ length: 3 }).map((_, index) => (
                <ProductDetails
                  key={index}
                  className={`border-b border-gray-200 last:border-b-0`}
                />
              ))}
            </div>
            <div className="mt-4">
              {/* Discount Code */}
              <div>
                <h1 className="font-bold text-sm/normal font-satoshi">
                  Discount Code
                </h1>
                <div className="mt-2 relative flex items-center justify-betweenmt-2 w-full rounded-lg border border-gray-200 overflow-hidden">
                  <input
                    type="text"
                    className="w-full rounded-lg p-2 pl-10 pr-4 placeholder:text-gray-800"
                    placeholder="Enter discount code"
                  />
                  <TicketIcon
                    className="absolute left-2 top-1/2 -translate-y-1/2"
                    fill="#4B7DF3"
                  />
                  <button className="absolute right-0 px-4 cursor-pointer h-full top-1/2 -translate-y-1/2 font-bold text-sm/normal text-blue-500 font-satoshi">
                    Apply
                  </button>
                </div>
              </div>

              {/* list of prices */}
              <div></div>
              {/* total price */}
              <div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
