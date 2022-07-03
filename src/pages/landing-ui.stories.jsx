import React from "react";
import LandingPage from "./components/landing-ui.component";

export default {
  title: "Landing Page/Landing UI",
  component: LandingPage,
};

const Template = (args) => <LandingPage {...args} />;

export const LandingPageUI = Template.bind({});
