import { logout } from "@/actions/auth/logout";
import React from "react";

const Page = () => {
  return (
    <div>
      dashboard{" "}
      <button
        type="button"
        className="cursor-pointer text-red-500 border-2 border-red-500"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
