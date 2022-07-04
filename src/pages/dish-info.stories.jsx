import React from "react";
import DishRecipe from "./components/dish-info.component";
import { dish } from "../models/test.data";

export default {
  title: "Recipe Components/Dish Information",
  component: DishRecipe,
};

const Template = (args) => <DishRecipe {...args} />;

export const DishInfo = Template.bind({});

DishInfo.args = {
  dish: dish,
};
