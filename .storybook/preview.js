import "../src/global.css";

/** @type { import('@storybook/react').Preview } */
// Things to enable in ALL stories
const preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default preview;
