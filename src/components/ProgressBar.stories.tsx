import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "./ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "fullscreen",
  },
  //   argTypes: {
  //     type: {
  //       options: ["normal", "basic", "golden", "golden-2"],
  //       control: { type: "radio" },
  //     },
  //   },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Component = Template.bind({});
Component.args = { color: "red", progress: 0.5 };
