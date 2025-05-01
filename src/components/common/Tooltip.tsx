import React from "react";

const Tooltip = ({
  children,
  text,
  cssClass = "",
}: {
  children: React.ReactNode;
  text: string;
  cssClass: string;
}) => {
  return (
    <div className={`relative group ${cssClass}`}>
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
        {text}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default Tooltip;
