import prisma from "@/libs/prisma";
import fs from "fs";
import path from "path";

async function generateAvailableLocations() {
  console.log("Fetching data from the database...");

  const provinces = await prisma.province.findMany({
    include: {
      municipalities: {
        include: {
          towns: true,
        },
      },
    },
  });

  const locations = {
    provinces: provinces.map((province) => ({
      id: province.id,
      name: province.name,
      municipalities: province.municipalities.map((municipality) => ({
        id: municipality.id,
        name: municipality.name,
        towns: municipality.towns.map((town) => ({
          id: town.id,
          name: town.name,
        })),
      })),
    })),
  };

  const filePath = path.join(__dirname, "../data/availableLocations.json");

  console.log("Writing data to availableLocations.json...");
  fs.writeFileSync(filePath, JSON.stringify(locations, null, 2), "utf-8");

  console.log("availableLocations.json has been successfully generated!");
}

generateAvailableLocations()
  .catch((error) => {
    console.error("Error generating availableLocations.json:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
