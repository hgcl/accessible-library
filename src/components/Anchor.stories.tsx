import type { Meta, StoryObj } from "@storybook/react";
import { Anchor, AnchorProps } from "./Anchor";

const meta: Meta<AnchorProps> = {
  title: "Typography/Anchor",
  component: Anchor,
  args: { opensNewTab: false },
};
export default meta;

type Story = StoryObj<AnchorProps>;

export const Default: Story = {};
