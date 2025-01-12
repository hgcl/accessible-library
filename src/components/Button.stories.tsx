import { Button } from "../components/Button";

export default {
  title: "Component/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: "radio" },
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
