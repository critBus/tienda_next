'use client';

import Image from 'next/image';

export default function CopyrightSection() {
  return (
    <div className="bg-[#1c2634] w-full flex flex-row justify-center gap-2 text-center items-center p-4">
      <span className="text-[#B2B2B2B2] roboto">Copyright © TSO 2023 - Madrid</span>
      <div className="flex flex-row items-center ml-2">
        <Image src="/assets/footer/es.png" alt="España" width={20} height={20} className="h-5 mr-2" />
        <span className="text-white ml-3 heebo">Español</span>
      </div>
    </div>
  );
} 