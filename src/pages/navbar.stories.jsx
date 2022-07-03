import React from "react";
import Navbar from "./components/navbar.component";

export default {
  title: "Nav/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const NavigationBar = Template.bind({});
