"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, LocationType } from "@/store/slices/locationSlice";
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

  // Para geolocalización (simulado)
  const handleUseCurrentLocation = () => {
    // Aquí deberías usar la API real de geolocalización y mapear a tu estructura
    // Simulación: Si existe Provincia A, seleccionarla, si no, país
    const province = availableLocations.provinces[0];
    if (province) {
      dispatch(
        setLocation({ type: "province", id: province.id, name: province.name })
      );
    } else {
      dispatch(setLocation({ type: "country" }));
    }
    setOpen(false);
  };

  const handleSelect = (loc: LocationType) => {
    dispatch(setLocation(loc));
    setOpen(false);
  };

  function getLocationLabel(loc: LocationType) {
    if (loc.type === "country") return "Todo el país";
    if (loc.type === "province") return loc.name;
    if (loc.type === "municipality") return loc.name;
    if (loc.type === "town") return loc.name;
    return "";
  }

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
            {getLocationLabel(selectedLocation)}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute z-50 bg-white border rounded shadow p-2 mt-2 w-64 max-h-80 overflow-auto">
          <div
            className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => handleSelect({ type: "country" })}
          >
            Todo el país
          </div>
          <div className="border-t my-1" />
          <div className="font-bold text-xs mb-1">Provincias</div>
          {availableLocations.provinces.map((prov) => (
            <div key={prov.id}>
              <div
                className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                onClick={() =>
                  handleSelect({
                    type: "province",
                    id: prov.id,
                    name: prov.name,
                  })
                }
              >
                {prov.name}
              </div>
              {prov.municipalities?.map((mun) => (
                <div key={mun.id} className="ml-4">
                  <div
                    className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                    onClick={() =>
                      handleSelect({
                        type: "municipality",
                        id: mun.id,
                        name: mun.name,
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
                            type: "town",
                            id: town.id,
                            name: town.name,
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
          <div className="border-t my-1" />
          <button
            className="w-full flex items-center gap-2 px-2 py-1 rounded bg-[#F6F6F6] hover:bg-[#E5EAF0] mt-1"
            onClick={handleUseCurrentLocation}
          >
            <Image
              src="/assets/header/location.svg"
              alt="Ubicación actual"
              width={16}
              height={16}
            />
            Usar mi ubicación actual
          </button>
        </div>
      )}
    </div>
  );
}
