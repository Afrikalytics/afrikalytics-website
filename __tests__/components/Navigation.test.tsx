import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";

jest.mock("next/link", () => {
  return ({ children, href, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

jest.mock("framer-motion", () => {
  const React = require("react");
  const motion = new Proxy({}, {
    get: (_target: any, prop: string) => {
      return React.forwardRef((props: any, ref: any) => {
        const { initial, animate, exit, variants, whileHover, whileTap, transition, viewport, whileInView, layoutId, custom, ...rest } = props;
        const Tag = prop as any;
        return React.createElement(Tag, { ...rest, ref });
      });
    },
  });
  return {
    motion,
    AnimatePresence: ({ children }: any) => children,
  };
});

jest.mock("lucide-react", () => {
  const MockIcon = ({ ...props }: any) => <svg {...props} />;
  return new Proxy({}, { get: () => MockIcon });
});

describe("Navigation", () => {
  beforeEach(() => {
    render(<Navigation />);
  });

  it("renders logo text", () => {
    expect(screen.getByText(/Afrikalytics/)).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    expect(screen.getAllByText("Accueil").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Propos/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/tudes/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Premium").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Contact").length).toBeGreaterThanOrEqual(1);
  });

  it('renders "Se Connecter" button', () => {
    expect(screen.getAllByText("Se Connecter").length).toBeGreaterThanOrEqual(1);
  });
});
