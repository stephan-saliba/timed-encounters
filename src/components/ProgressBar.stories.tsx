import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "./ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "fullscreen",
  },
    argTypes: {
      color: {
        options: ["red", "blue", "green"],
        control: { type: "radio" },
      },
      progress: {
        control: { type: "range", min: 0, max: 1, step: 0.01 },
      }
    },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Component = Template.bind({});
Component.args = { color: "red", progress: 0.5 };
