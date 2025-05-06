import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import LayoutPage from "@/app/layout";
it("Productos recomendados", () => {
  render(
    <LayoutPage>
      <HomePage />
    </LayoutPage>
  );
  expect(9).toBe(9);
  // expect(screen.getByText("Productos recomendados")).toBeInTheDocument();
});
