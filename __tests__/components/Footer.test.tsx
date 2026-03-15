import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

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

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders copyright text", () => {
    expect(
      screen.getByText(/© 2025 Afrikalytics AI by Marketym/)
    ).toBeInTheDocument();
  });

  it("renders Dakar location", () => {
    expect(screen.getByText(/Dakar/)).toBeInTheDocument();
  });

  it("renders contact email", () => {
    expect(screen.getByText("contact@afrikalytics.com")).toBeInTheDocument();
  });

  it("renders phone number", () => {
    expect(screen.getByText("+221 77 361 90 28")).toBeInTheDocument();
  });

  it("renders all section headings", () => {
    expect(screen.getByText("Nos Services")).toBeInTheDocument();
    expect(screen.getByText("Entreprises")).toBeInTheDocument();
    expect(screen.getByText("Particuliers")).toBeInTheDocument();
  });
});
