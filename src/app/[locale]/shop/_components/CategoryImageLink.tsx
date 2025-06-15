"use client";

import Image from "next/image";
import Link from "next/link";
import "./CategoryImageLink.css";
interface CategoryImageLinkProps {
  img: string;
  name: string;
}

export default function CategoryImageLink({
  img,
  name,
}: CategoryImageLinkProps) {
  return (
    <Link
      href="#"
      className="flex-shrink-0 flex flex-col items-center text-center no-underline group overflow-visible"
    >
      <div className="flex items-center justify-center overflow-visible">
        <div className="flex flex-col overflow-visible">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 overflow-visible">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FEF4DB] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <Image
              src={img}
              alt={img}
              width={160}
              height={160}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40"
            />
          </div>
          <span className="text-sm sm:text-[10px] roboto font-semibold leading-[1.2] uppercase text-gray-700 group-hover:text-gray-900 block w-20 sm:w-full text-center truncate overflow-hidden whitespace-nowrap text-ellipsis">
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
}
