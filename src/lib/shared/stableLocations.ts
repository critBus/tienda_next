import availableLocations from "@/data/availableLocations.json";

export interface TownData {
  id: number;
  name: string;
}

export interface MunicipalityData {
  id: number;
  name: string;
  towns: TownData[];
}

export interface ProvinceData {
  id: number;
  name: string;
  municipalities: MunicipalityData[];
}

export function getStableLocations(): ProvinceData[] {
  const provinces = availableLocations.provinces || [];

  return provinces
    .filter(
      (prov) => prov.id && prov.name && Array.isArray(prov.municipalities)
    )
    .map((prov) => ({
      id: prov.id,
      name: prov.name,
      municipalities: (prov.municipalities || [])
        .filter((mun) => mun.id && mun.name && Array.isArray(mun.towns))
        .map((mun) => ({
          id: mun.id,
          name: mun.name,
          towns: (mun.towns || [])
            .filter((town) => town.id && town.name)
            .map((town) => ({
              id: town.id,
              name: town.name,
            }))
            .sort((a, b) => a.name.localeCompare(b.name)),
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
