import { ComponentStory, ComponentMeta } from "@storybook/react";
import Container from "./Container";

export default {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: {
      options: ["normal", "basic", "golden", "golden-2"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Component = Template.bind({});
Component.args = {
  children: "Hello, World!",
  type: "normal",
};
