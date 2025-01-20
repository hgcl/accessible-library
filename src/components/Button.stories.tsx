import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: "radio" },
    type: { control: "radio" },
    isDisabled: { control: "boolean" },
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

export const Destructive = {
  args: {
    variant: "destructive",
  },
};
