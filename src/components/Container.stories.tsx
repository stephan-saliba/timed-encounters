import { ComponentStory, ComponentMeta } from "@storybook/react";
import Container from "./Container";

export default {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "Hello, World!",
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Hello, World!",
  type: "basic"
};

export const Golden = Template.bind({});
Golden.args = {
  children: "Hello, World!",
  type: "golden"
};

export const Golden2 = Template.bind({});
Golden2.args = {
  children: "Hello, World!",
  type: "golden-2"
};
