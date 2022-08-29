import { ComponentStory, ComponentMeta } from "@storybook/react";
import Timer from "./Timer";

export default {
  title: "Components/Timer",
  component: Timer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Component = Template.bind({});
Component.args = { name: "Hello, World!", duration: 10, elapsed: 5 };
