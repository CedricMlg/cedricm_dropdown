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
  options: ["option1", "option2", "option3"],
};
