import next from "eslint-config-next";

const config = [
  ...next,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "coverage/**",
      "out/**",
      "build/**",
    ],
  },
  {
    files: ["__tests__/**/*.{ts,tsx}"],
    rules: {
      "react/display-name": "off",
    },
  },
];

export default config;
