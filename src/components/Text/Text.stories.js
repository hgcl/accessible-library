import Text from "./Text";

export default {
  title: "Atom/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Example = {
  args: {
    copy: "hello world",
  },
};
