"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

import MessageLoginForm from "@/components/feature/auth/MessageLoginForm";

const MessageClientLoginForm = () => {
  const searchParams = useSearchParams();

  return (
    <MessageLoginForm
      error={searchParams.get("error") ?? undefined}
      success={searchParams.get("success") ?? undefined}
    />
  );
};

export default MessageClientLoginForm;
