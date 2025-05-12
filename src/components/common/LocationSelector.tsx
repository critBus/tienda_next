"use client";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, LocationType } from "@/store/slices/locationSlice";
import availableLocations from "@/data/availableLocations.json";
import { RootState } from "@/store";
import Image from "next/image";
import {
  getStableLocations,
  ProvinceData,
  MunicipalityData,
  TownData,
} from "@/utils/stableLocations";
import { useTranslations } from "next-intl";

interface Props {
  showText?: boolean;
}

export default function LocationSelector({ showText = true }: Props) {
  const t = useTranslations("LocationSelector");
  const dispatch = useDispatch();
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedProvince, setExpandedProvince] = useState<number | null>(null);
  const [expandedMunicipality, setExpandedMunicipality] = useState<
    number | null
  >(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const [stableLocations] = useState(getStableLocations());

  const handleSelect = (location: LocationType) => {
    console.log("Selected location:", location);
    dispatch(setLocation(location));
    setOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  const filterLocations = (): ProvinceData[] => {
    const lowerSearch = search.toLowerCase();
    const responseLocations: ProvinceData[] = [];
    for (const prov of stableLocations) {
      const filteredMunicipalities: MunicipalityData[] = [];

      for (const mun of prov.municipalities || []) {
        const filteredTowns: TownData[] = [];

        for (const town of mun.towns || []) {
          if (town.name.toLowerCase().includes(lowerSearch)) {
            filteredTowns.push(town);
          }
        }

        if (filteredTowns.length) {
          filteredMunicipalities.push({ ...mun, towns: filteredTowns });
        } else if (mun.name.toLowerCase().includes(lowerSearch)) {
          filteredMunicipalities.push(mun);
        }
      }
      if (filteredMunicipalities.length) {
        responseLocations.push({
          ...prov,
          municipalities: filteredMunicipalities,
        });
      } else if (prov.name.toLowerCase().includes(lowerSearch)) {
        responseLocations.push(prov);
      }
    }

    return responseLocations;
  };

  const filteredLocations = filterLocations();

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1
        hover:cursor-pointer hover:scale-110 hover:ring  hover:ring-offset-4 hover:rounded-2xl hover:ring-gray-600 transition-transform duration-200 ease-in-out"
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
        <div
          ref={popupRef}
          className="absolute z-50 bg-white border rounded shadow p-2 mt-2 w-64 max-h-80 overflow-auto"
        >
          <input
            type="text"
            placeholder={`${t("search")}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-2 p-1 border rounded"
          />
          <div
            className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => handleSelect({})}
          >
            {t("wholeCountry")}
          </div>
          <div className="border-t my-1" />
          {filteredLocations.slice(0, 6).map((prov) => (
            <div key={prov.id}>
              <div className="cursor-pointer flex flex-row">
                <div
                  className="w-[80%] cursor-pointer hover:bg-gray-100 px-2 py-1 rounded flex justify-between"
                  onClick={() => {
                    handleSelect({
                      provinceId: prov.id,
                      provinceName: prov.name,
                    });
                  }}
                >
                  {prov.name}
                </div>
                <div
                  className="w-[20%] m-1 bg-gray-300 flex items-center justify-center rounded cursor-pointer hover:bg-gray-400"
                  onClick={() => {
                    setExpandedProvince((prev) =>
                      prev === prov.id ? null : prov.id
                    );
                    setExpandedMunicipality(null);
                  }}
                >
                  {prov.municipalities && (
                    <span>{expandedProvince === prov.id ? "-" : "+"}</span>
                  )}
                </div>
              </div>

              {expandedProvince === prov.id &&
                prov.municipalities?.slice(0, 6).map((mun) => (
                  <div key={mun.id}>
                    <div className="cursor-pointer flex flex-row">
                      <div
                        className="w-[80%] pl-4 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded flex justify-between"
                        onClick={() => {
                          handleSelect({
                            provinceId: prov.id,
                            provinceName: prov.name,
                            municipalityId: mun.id,
                            municipalityName: mun.name,
                          });
                        }}
                      >
                        {mun.name}
                      </div>
                      <div
                        className="w-[20%] m-1 bg-gray-300 flex items-center justify-center rounded cursor-pointer hover:bg-gray-400"
                        onClick={() => {
                          setExpandedMunicipality((prev) =>
                            prev === mun.id ? null : mun.id
                          );
                        }}
                      >
                        {mun.towns && (
                          <span>
                            {expandedMunicipality === mun.id ? "-" : "+"}
                          </span>
                        )}
                      </div>
                    </div>

                    {expandedMunicipality === mun.id &&
                      mun.towns?.slice(0, 6).map((town) => (
                        <div key={town.id} className="ml-4">
                          <div
                            className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                            onClick={() =>
                              handleSelect({
                                provinceId: prov.id,
                                provinceName: prov.name,
                                municipalityId: mun.id,
                                municipalityName: mun.name,
                                townId: town.id,
                                townName: town.name,
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
