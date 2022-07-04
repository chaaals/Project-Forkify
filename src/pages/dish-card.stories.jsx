import React from "react";
import DishCard from "./components/dish-card.component";
import { dish } from "../models/test.data";

export default {
  title: "Recipe Components/Dish Card",
  component: DishCard,
};

const Template = (args) => <DishCard {...args} />;
export const Dish = Template.bind({});

Dish.args = {
  dish: dish,
};
