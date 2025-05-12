import "@testing-library/jest-dom";
import { execSync } from "child_process";

beforeAll(() => {
  // Aplica migraciones a la base de datos de test
  execSync("npx prisma migrate deploy", { stdio: "inherit" });
});
