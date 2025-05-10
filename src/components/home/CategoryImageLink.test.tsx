import { render, screen } from "@testing-library/react";
import CategoryImageLink from "./CategoryImageLink";

jest.mock("next/image", () => (props: any) => {
  // Renderiza una img normal para facilitar el test
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} />;
});

describe("CategoryImageLink", () => {
  it("muestra la imagen y el nombre de la categoría", () => {
    const img = "/test-image.jpg";
    const name = "Categoría de Prueba";

    render(<CategoryImageLink img={img} name={name} />);

    // Verifica que la imagen esté en el documento
    const image = screen.getByAltText(img);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", img);

    // Verifica que el nombre esté en el documento
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
