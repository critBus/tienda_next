import React from "react";

const SuccessAlert = ({
  title = "Success",
  messages,
  className,
}: {
  title: string;
  messages: string[];
  className?: string;
}) => {
  return (
    <div className={`container ${className && className}`}>
      <div
        className="flex flex-row h-full w-full rounded-lg border-l-[6px]
       border-green-400 bg-red-50 
       shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)]
       items-center justify-center 
        p-2"
      >
        <div
          className="mr-5 flex  h-full w-full max-w-[34px] 
        items-center justify-center 
        rounded-lg "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path
              fill="#30c550"
              d="M11.53 2.3A1.85 1.85 0 0 0 10 1.21A1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
            />
          </svg>
        </div>
        <div className="w-full">
          <h5 className="mb-1 text-base font-semibold text-[#52f352]">
            {title}
          </h5>
          {messages && (
            <ul className="list-inside list-disc">
              {messages.map((error, index) => (
                <li
                  key={index}
                  className="text-base leading-relaxed text-green-400"
                >
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
