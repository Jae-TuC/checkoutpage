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

import "react-phone-number-input/style.css";

const OrderSummary = () => {
  const [showOrderSummary, setShowOrderSummary] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState<"visa" | "paypal">(
    "visa"
  );
  const [value, setValue] = React.useState<E164Number>();
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 1240);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const handlePaymentMethodChange = (
    e: React.MouseEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>,
    method: "visa" | "paypal"
  ) => {
    e.preventDefault();
    setPaymentMethod(method);
  };

  return (
    <div className="p-6 md:px-45">
      <div className="flex flex-col gap-8">
        <div className="bg-gray-50 rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowOrderSummary(!showOrderSummary)}
            >
              <p className="font-bold text-base/loose tracking-wide transition duration-300 font-satoshi">
                {isDesktop ? "Hide order Summary" : "Show order Summary"}
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
                  <button className="absolute right-0 px-4 cursor-pointer h-full top-1/2 -translate-y-1/2 font-bold text-sm/normal text-blue-500 font-satoshi scale-100 hover:scale-102 transition-all duration-100">
                    Apply
                  </button>
                </div>
              </div>

              {/* list of prices */}
              <div className="my-4">
                <div className="w-full h-[0.025rem] bg-gray-200" />
                <div className="my-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p>Subtotal</p>
                    <p className="font-medium">$59.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Shipping Cost</p>
                    <p className="font-medium">$8.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Discount (10%)</p>
                    <p className="font-medium">-$13.00</p>
                  </div>
                </div>
                <div className="w-full h-[0.025rem] bg-gray-200" />
                <div className="flex items-center justify-between mt-4">
                  <p className="font-bold font-satoshi">Total</p>
                  <p className="font-bold font-satoshi">$51.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <div>
            <form className="flex flex-col gap-6">
              <label
                htmlFor="email"
                className="font-bold font-satoshi inline-flex flex-col gap-2"
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
                className="relative font-bold font-satoshi inline-flex flex-col gap-2"
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
                  <p className="font-bold font-satoshi text-base/normal">
                    Payment Method
                  </p>

                  <span className="relative flex items-center gap-2 text-blue-500 font-bold after:absolute after:content-[''] after:w-full after:h-[0.1rem] after:bg-blue-500 after:-bottom-0 after:left-0 after:transition-all after:duration-100 after:ease-in-out after:opacity-0 hover:after:opacity-100 cursor-pointer">
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
                          className="text-sm/normal ml-2 font-semibold"
                        >
                          **** 8988
                        </label>
                        <div className="flex gap-1 text-sm/normal text-gray-500">
                          Visa <Dot /> <button>Edit</button>
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
                          className="text-sm/normal ml-2 font-semibold"
                        >
                          **** 8978
                        </label>
                        <div className="flex gap-1 text-sm/normal text-gray-500">
                          Paypal <Dot /> <button>Edit</button>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
