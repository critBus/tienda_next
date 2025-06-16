// // components/AlertaError.jsx

// /**
//  * Componente de Alerta para mostrar errores de envío.
//  * @param {{ errors: string[] }} props - Las props del componente.
//  * @param {string[]} props.errors - Un array de mensajes de error a mostrar.
//  */
// const ErrorAlert = ({ errors = [] }) => {
//   // Si no hay errores, no se renderiza nada.
//   if (errors.length === 0) {
//     return null;
//   }

//   return (
//     <div className="rounded-md bg-red-50 p-4 shadow-md">
//       <div className="flex">
//         <div className="flex-shrink-0">
//           {/* Círculo rojo con el ícono de 'X' */}
//           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
//             <svg
//               className="h-5 w-5 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="ml-3">
//           <h3 className="text-sm font-medium text-red-800">
//             {/* El título cambia si es singular o plural */}
//             {`Hubo ${errors.length} ${errors.length > 1 ? "errores" : "error"} con tu envío`}
//           </h3>
//           <div className="mt-2 text-sm text-red-700">
//             <ul role="list" className="list-disc space-y-1 pl-5">
//               {/* Mapea y muestra cada error en la lista */}
//               {errors.map((error, index) => (
//                 <li key={index}>{error}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorAlert;

import React from "react";

const ErrorAlert = ({
  title = "Error",
  errors,
  className,
}: {
  title: string;
  errors: string[];
  className?: string;
}) => {
  return (
    <div className={`container ${className && className}`}>
      <div
        className="flex flex-row h-full w-full rounded-lg border-l-[6px]
       border-red-700 bg-red-50 
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
              fill="#c53030"
              d="M11.53 2.3A1.85 1.85 0 0 0 10 1.21A1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
            />
          </svg>
        </div>
        <div className="w-full">
          <h5 className="mb-1 text-base font-semibold text-[#BC1C21]">
            {title}
          </h5>
          {errors && (
            <ul className="list-inside list-disc">
              {errors.map((error, index) => (
                <li
                  key={index}
                  className="text-base leading-relaxed text-red-400"
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

export default ErrorAlert;
