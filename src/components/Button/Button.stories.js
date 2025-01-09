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
};

export const Primary = {
  args: {
    hierarchy: "primary",
    label: "Primary",
  },
};

export const Secondary = {
  args: {
    hierarchy: "secondary",
    label: "Secondary",
  },
};

export const Tertiary = {
  args: {
    hierarchy: "tertiary",
    label: "Tertiary",
  },
};
