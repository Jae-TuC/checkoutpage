"use client";

import React from "react";
import { motion } from "motion/react";
import PhoneInput from "react-phone-number-input";
import type { Value as E164Number } from "react-phone-number-input";
import Image from "next/image";

import { Dot, PlusIcon } from "lucide-react";
import { cn } from "@/lib/util";

import { TicketIcon } from "./icons/ticket";
import ProductDetails from "./product-details";

import visa from "@/assets/visa.png";
import paypal from "@/assets/paypal.png";
import logo from "@/assets/logo.png";

import "react-phone-number-input/style.css";

const Orders = () => {
  const [showOrderSummary, setShowOrderSummary] = React.useState(true);
  const [paymentMethod, setPaymentMethod] = React.useState<"visa" | "paypal">(
    "visa"
  );

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 1240);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);
  const [value, setValue] = React.useState<E164Number>();

  const handlePaymentMethodChange = (
    e: React.MouseEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>,
    method: "visa" | "paypal"
  ) => {
    e.preventDefault();
    setPaymentMethod(method);
  };

  const handleShowOrderSummary = () => {
    if (isDesktop) {
      setShowOrderSummary(true);
    } else {
      setShowOrderSummary((prev) => !prev);
    }
  };

  return (
    <div className="relative p-6 md:px-20 lg:px-45 xl:p-0">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-0 ">
        <div className="flex-1 bg-gray-50 rounded-2xl xl:rounded-none  px-4 py-3 xl:pb-0 xl:pl-41 xl:pr-29 xl:pt-30">
          <div className="absolute top-6 left-8 xl:block hidden">
            <Image src={logo} alt="logo" />
          </div>
          {isDesktop ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="font-bold text-base/loose tracking-wide transition duration-300 font-satoshi">
                  Your Orders
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={handleShowOrderSummary}
              >
                <p className="font-bold text-base/loose tracking-wide transition duration-300 font-satoshi">
                  Show order summary
                </p>

                <span
                  className={cn(
                    "transition-transform duration-400",
                    showOrderSummary ? "rotate-180" : ""
                  )}
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
          )}

          <motion.div
            initial={{
              opacity: showOrderSummary ? 1 : isDesktop ? 1 : 0,
              height: showOrderSummary ? "auto" : isDesktop ? 0 : 0,
            }}
            animate={{
              opacity: showOrderSummary ? 1 : isDesktop ? 1 : 0,
              height: showOrderSummary ? "auto" : 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
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
                <h1 className="font-bold text-sm/normal lg:text-base/normal font-satoshi">
                  Discount Code
                </h1>
                <div className="mt-2 relative flex items-center justify-between w-full rounded-lg overflow-hidden">
                  <input
                    type="text"
                    className="w-full rounded-xl p-2 pl-10 pr-4 placeholder:text-gray-800 outline-none focus:border-2 focus-within:border-blue-500 focus:transition-all focus:duration-100"
                    placeholder="Enter discount code"
                  />
                  <TicketIcon
                    className="absolute left-2 top-1/2 -translate-y-1/2"
                    fill="#4B7DF3"
                  />
                  <button className="absolute right-0 px-4 cursor-pointer h-full top-1/2 -translate-y-1/2 font-bold text-sm/normal lg:text-base/normal text-blue-500 font-satoshi scale-100 hover:scale-102 transition-all duration-100">
                    Apply
                  </button>
                </div>
              </div>

              {/* list of prices */}
              <div className="my-4">
                <div className="w-full h-[0.025rem] bg-gray-200" />
                <div className="my-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm lg:text-base">Subtotal</p>
                    <p className="font-medium text-sm lg:text-base">$59.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm lg:text-base">Shipping Cost</p>
                    <p className="font-medium text-sm lg:text-base">$8.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm lg:text-base">Discount (10%)</p>
                    <p className="font-medium text-sm lg:text-base">-$13.00</p>
                  </div>
                </div>
                <div className="w-full h-[0.025rem] bg-gray-200" />
                <div className="flex items-center justify-between mt-4">
                  <p className="font-bold font-satoshi text-sm lg:text-base">
                    Total
                  </p>
                  <p className="font-bold font-satoshi text-sm lg:text-base">
                    $51.00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 xl:pt-30 xl:pl-29 xl:pr-29 ">
          <div>
            <form className="flex flex-col gap-6 pb-6">
              <label
                htmlFor="email"
                className="font-bold text-sm/normal lg:text-base/normal font-satoshi inline-flex flex-col gap-2"
              >
                Email
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="px-4 py-[0.69rem] rounded-xl outline-1 outline-gray-200 focus-within:outline-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:transition-all focus-within:duration-100"
                />
              </label>

              <label
                htmlFor="phone"
                className="relative font-bold text-sm/normal lg:text-base/normal font-satoshi inline-flex flex-col gap-2"
              >
                Phone
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  value={value}
                  onChange={(value) => setValue(value)}
                  format="international"
                  className="outline-1 outline-gray-200 rounded-xl px-4 py-[0.69rem]"
                />
              </label>

              <div>
                <div className="flex items-center justify-between">
                  <p className="font-bold font-satoshi text-sm/normal lg:text-base/normal">
                    Payment Method
                  </p>

                  <span className="relative flex items-center  gap-2 text-blue-500 font-bold after:absolute after:content-[''] after:w-full after:h-[0.1rem] after:bg-blue-500 after:-bottom-0 after:left-0 after:transition-all after:duration-100 after:ease-in-out after:opacity-0 hover:after:opacity-100 cursor-pointer">
                    <PlusIcon className="size-4 stroke-3" />
                    Add new
                  </span>
                </div>
                <div className="mt-4 flex gap-1.5">
                  <div
                    className={cn(
                      "flex-1 flex h-16 items-center justify-between border-2 p-3 rounded-xl gap-1 transition-all duration-300 cursor-pointer",
                      paymentMethod === "visa"
                        ? "border-blue-500"
                        : "border-gray-200"
                    )}
                    onClick={(e) => handlePaymentMethodChange(e, "visa")}
                  >
                    <div className="flex items-start gap-2">
                      <input
                        type="radio"
                        id="card-number-visa"
                        className="mt-1"
                        value="visa"
                        checked={paymentMethod === "visa"}
                        onChange={(e) => handlePaymentMethodChange(e, "visa")}
                      />
                      <div className="flex flex-col items-start justify-start">
                        <label
                          htmlFor="card-number-visa"
                          className="text-sm/normal lg:text-base/normal ml-2 font-semibold"
                        >
                          **** 8988
                        </label>
                        <div className="flex gap-1 text-sm/normal lg:text-base/normal text-gray-500">
                          Visa <Dot />{" "}
                          <button onClick={() => console.log("visa")}>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>

                    <Image src={visa} alt="visa" className="hidden sm:block" />
                  </div>

                  <div
                    className={cn(
                      "flex-1 flex h-16 items-center justify-between border-2 p-3 rounded-xl gap-1 transition-all duration-300 cursor-pointer",
                      paymentMethod === "paypal"
                        ? "border-blue-500"
                        : "border-gray-200"
                    )}
                    onClick={(e) => handlePaymentMethodChange(e, "paypal")}
                  >
                    <div className="flex items-start gap-2">
                      <input
                        type="radio"
                        id="card-number-paypal"
                        className="mt-1"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => handlePaymentMethodChange(e, "paypal")}
                      />
                      <div className="flex flex-col items-start justify-start">
                        <label
                          htmlFor="card-number-paypal"
                          className="text-sm/normal lg:text-base/normal ml-2 font-semibold"
                        >
                          **** 8978
                        </label>
                        <div className="flex gap-1 text-sm/normal lg:text-base/normal text-gray-500">
                          Paypal <Dot />{" "}
                          <button onClick={() => console.log("paypal")}>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>

                    <Image
                      src={paypal}
                      alt="paypal"
                      className="hidden object-contain sm:block"
                    />
                  </div>
                </div>
              </div>
              <label
                htmlFor="card-holder-name"
                className="font-bold text-sm/normal lg:text-base/normal font-satoshi inline-flex flex-col gap-2"
              >
                Card Holder Name
                <input
                  type="text"
                  id="card-holder-name"
                  placeholder="Ex. John Doe"
                  className="px-4 py-[0.69rem] rounded-xl outline-1 outline-gray-200 focus-within:outline-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:transition-all focus-within:duration-100"
                />
              </label>

              <label
                htmlFor="billing-address"
                className="font-bold text-sm/normal lg:text-base/normal font-satoshi inline-flex flex-col gap-2"
              >
                Billing Address
                <select
                  name=""
                  id=""
                  className="px-4 pr-10 py-[0.69rem] rounded-xl outline-1 outline-gray-200 focus-within:outline-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:transition-all focus-within:duration-100"
                >
                  <option value="">United States</option>
                  <option value="">United Kingdom</option>
                  <option value="">Canada</option>
                  <option value="">Australia</option>
                  <option value="">New Zealand</option>
                </select>
              </label>

              <div className="flex w-full gap-4">
                <label
                  htmlFor="zip-code"
                  className="flex-1 font-bold text-sm/normal lg:text-base/normal font-satoshi inline-flex flex-col gap-2"
                >
                  Zip Code
                  <input
                    type="text"
                    id="zip-code"
                    placeholder="Ex. 10001"
                    className="px-4 py-[0.69rem] rounded-xl outline-1 outline-gray-200 focus-within:outline-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:transition-all focus-within:duration-100"
                  />
                </label>
                <label
                  htmlFor="city"
                  className="flex-1 font-bold text-sm/normal lg:text-base/normal font-satoshi inline-flex flex-col gap-2"
                >
                  City
                  <input
                    type="text"
                    id="city"
                    placeholder="Ex. New York"
                    className="px-4 py-[0.69rem] rounded-xl outline-1 outline-gray-200 focus-within:outline-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:transition-all focus-within:duration-100"
                  />
                </label>
              </div>

              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="billing-updates"
                  className="size-4.5 rounded-lg"
                />
                <span className="font-satoshi font-medium text-gray-500 text-sm/normal lg:text-base/normal">
                  Billing address is same as shipping
                </span>
              </span>

              <button className="bg-blue-500 text-white font-bold font-satoshi text-sm/normal lg:text-base/normal py-2 cursor-pointer rounded-lg">
                Pay $59
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
