import React from "react";
import { fn } from "@storybook/test";
import Button from "./Button";

export default {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  // About argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    onClick: {
      description: "Function that's called when the button is clicked.",
    },
    children: { control: "text" },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary = {
  args: {
    variant: "tertiary",
  },
};
