import Image from "next/image";
import React from "react";
import productImage from "@/assets/product.png";

interface ProductDetailsProps {
  className?: string;
}

const ProductDetails = ({ className }: ProductDetailsProps) => {
  return (
    <div className={`flex items-start  gap-4 p-4 ${className}`}>
      {/* Product Image */}
      <div className="relative w-12 h-12 bg-white border border-gray-200 rounded-lg">
        <Image
          src={productImage}
          alt="product"
          className="w-full h-full object-cover"
        />
        <span className="absolute -top-1 -right-1 size-4 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-900 text-[8px] font-bold shadow-xs">
          1
        </span>
      </div>
      {/* Product details */}
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="text-gray-900 font-bold text-sm/normal">
            Nike Air Zoom Premium
          </p>
          <p className="text-gray-900 font-medium text-sm/normal">$20.00</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-500 font-medium text-sm/normal">
            Size:{" "}
            <span className="text-gray-900 font-medium uppercase">xl</span>
          </p>
          <p className="text-gray-500 font-medium text-sm/normal">
            Color:{" "}
            <span className="text-gray-900 font-medium uppercase">Blue</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
