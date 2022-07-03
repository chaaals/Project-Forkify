import React from "react";
import LandingUIGreet from "./components/landing-ui-greet.component";

export default {
  title: "Landing Page/Landing UI Greet",
  component: LandingUIGreet,
};

const Template = (args) => <LandingUIGreet {...args} />;

export const Greeting = Template.bind({});
