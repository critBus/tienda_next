"use client";

import LoguinForm from "@/components/feature/auth/LoguinForm";

import React from "react";

const Page = () => {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <LoguinForm />
        </div>
      </div>
    </>
  );
};

export default Page;
