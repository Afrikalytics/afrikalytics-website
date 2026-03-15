import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CGUPage from "@/app/cgu/page";

jest.mock("next/link", () => {
  return ({ children, href, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

jest.mock("lucide-react", () => {
  const MockIcon = ({ ...props }: any) => <svg {...props} />;
  return new Proxy({}, { get: () => MockIcon });
});

describe("CGU Page", () => {
  beforeEach(() => {
    render(<CGUPage />);
  });

  it('renders "Conditions Générales d\'Utilisation" heading', () => {
    expect(
      screen.getByText("Conditions Générales d'Utilisation")
    ).toBeInTheDocument();
  });

  it("renders all 11 articles", () => {
    const articles = [
      "Article 1 - Mentions légales",
      "Article 2 - Objet",
      "Article 3 - Services proposés",
      "Article 4 - Plans et tarification",
      "Article 5 - Inscription et compte utilisateur",
      "Article 6 - Paiement et abonnement",
      "Article 7 - Propriété intellectuelle",
      "Article 8 - Responsabilités",
      "Article 9 - Résiliation",
      "Article 10 - Droit applicable",
      "Article 11 - Contact",
    ];

    articles.forEach((article) => {
      expect(screen.getByText(article)).toBeInTheDocument();
    });
  });
});
