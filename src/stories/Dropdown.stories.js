import React from "react";
import { Dropdown } from "../components/Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const main = Template.bind({});
main.args = {
  label: "dropdown",
  options: [
    { value: "opt1", name: "option1" },
    { value: "opt2", name: "option2" },
    { value: "opt3", name: "option3" },
  ],
};
