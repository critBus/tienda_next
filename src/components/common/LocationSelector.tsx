"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, FilterType } from "@/store/slices/locationSlice";
import availableLocations from "@/data/availableLocations.json";
import { RootState } from "@/store";
import Image from "next/image";

interface Props {
  showText?: boolean;
}

export default function LocationSelector({ showText = true }: Props) {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );
  const [open, setOpen] = useState(false);

  const handleSelect = (location: FilterType) => {
    dispatch(setLocation(location));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1"
        onClick={() => setOpen((v) => !v)}
        aria-label="Seleccionar ubicación"
      >
        <Image
          src="/assets/header/location.svg"
          alt="Ubicación"
          width={20}
          height={20}
        />
        {showText && (
          <span className="text-xs font-medium text-[#4E4949]">
            {selectedLocation.provinceId
              ? availableLocations.provinces.find(
                  (p) => p.id === selectedLocation.provinceId
                )?.name
              : "Todo el país"}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute z-50 bg-white border rounded shadow p-2 mt-2 w-64 max-h-80 overflow-auto">
          <div
            className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => handleSelect({})}
          >
            Todo el país
          </div>
          <div className="border-t my-1" />
          {availableLocations.provinces.map((prov) => (
            <div key={prov.id}>
              <div
                className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                onClick={() => handleSelect({ provinceId: prov.id })}
              >
                {prov.name}
              </div>
              {prov.municipalities?.map((mun) => (
                <div key={mun.id} className="ml-4">
                  <div
                    className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                    onClick={() =>
                      handleSelect({
                        provinceId: prov.id,
                        municipalityId: mun.id,
                      })
                    }
                  >
                    {mun.name}
                  </div>
                  {mun.towns?.map((town) => (
                    <div key={town.id} className="ml-4">
                      <div
                        className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                        onClick={() =>
                          handleSelect({
                            provinceId: prov.id,
                            municipalityId: mun.id,
                            townId: town.id,
                          })
                        }
                      >
                        {town.name}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
