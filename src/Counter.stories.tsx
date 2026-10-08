import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent } from "storybook/test";
import { Counter } from "./Counter";

const meta = { component: Counter } satisfies Meta<typeof Counter>;
export default meta;

export const Default: StoryObj<typeof meta> = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByRole("button")).toHaveTextContent("count: 1");
  },
};
