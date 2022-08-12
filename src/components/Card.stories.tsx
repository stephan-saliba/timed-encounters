import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Component = Template.bind({});
Component.args = {
  children: "Hello, World!",
};
