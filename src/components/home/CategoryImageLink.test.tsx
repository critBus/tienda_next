import { render, screen } from "@testing-library/react";
import CategoryImageLink from "./CategoryImageLink";

describe("CategoryImageLink", () => {
  it("muestra la imagen y el nombre de la categoría", async () => {
    const img = "/test-image.jpg";
    const name = "Categoría de Prueba";

    render(<CategoryImageLink img={img} name={name} />);
    const image = screen.getByAltText(img);
    expect(image).toBeInTheDocument();
    const attribute = image.getAttribute("src");
    expect(attribute).toContain(encodeURIComponent(img));

    // Verifica que el nombre esté en el documento
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
