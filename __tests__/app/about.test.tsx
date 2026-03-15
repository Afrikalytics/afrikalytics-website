import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

jest.mock("lucide-react", () => {
  const MockIcon = ({ ...props }: any) => <svg {...props} />;
  return new Proxy({}, { get: () => MockIcon });
});

describe("About Page", () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  it("renders the mission section", () => {
    expect(screen.getByText("Notre Mission")).toBeInTheDocument();
  });

  it("renders all 4 values", () => {
    expect(screen.getByText("Précision")).toBeInTheDocument();
    expect(screen.getByText("Expertise Locale")).toBeInTheDocument();
    expect(screen.getByText("Couverture")).toBeInTheDocument();
    expect(screen.getByText("Excellence")).toBeInTheDocument();
  });

  it('renders "Notre Histoire" section', () => {
    expect(screen.getByText("Notre Histoire")).toBeInTheDocument();
  });
});
