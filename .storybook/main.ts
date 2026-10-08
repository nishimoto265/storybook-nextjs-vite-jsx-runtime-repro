import type { StorybookConfig } from "@storybook/nextjs-vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-vitest"],
  framework: { name: "@storybook/nextjs-vite", options: { image: { excludeFiles: ["**/*.svg"] } } },
  core: { disableTelemetry: true },
  viteFinal: (config) => ({
    ...config,
    plugins: [svgr({ include: "**/*.svg", svgrOptions: { exportType: "default" } }), ...(config.plugins ?? [])],
  }),
};

export default config;
