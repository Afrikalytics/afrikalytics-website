import { render, screen } from "@testing-library/react";
import PremiumPage from "@/app/premium/page";

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

describe("Premium Page", () => {
  beforeEach(() => {
    render(<PremiumPage />);
  });

  it("renders 3 plan cards", () => {
    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("Professionnel")).toBeInTheDocument();
    expect(screen.getByText("Entreprise")).toBeInTheDocument();
  });

  it("renders plan prices", () => {
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("295,000")).toBeInTheDocument();
    expect(screen.getByText("Sur mesure")).toBeInTheDocument();
  });

  it('shows "Le plus populaire" badge on Professionnel plan', () => {
    expect(screen.getByText(/Le plus populaire/)).toBeInTheDocument();
  });
});
