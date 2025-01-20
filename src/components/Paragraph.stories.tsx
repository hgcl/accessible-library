import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph, ParagraphProps } from "./Paragraph";

const meta: Meta<ParagraphProps> = {
  title: "Typography/Paragraph",
  component: Paragraph,
};
export default meta;

type Story = StoryObj<ParagraphProps>;

export const Small: Story = {
  args: {
    size: "s",
  },
};

export const Medium: Story = {
  args: {
    size: "m",
  },
};

export const Large: Story = {
  args: {
    size: "l",
  },
};

export const Bold: Story = {
  args: {
    weight: "bold",
  },
};
