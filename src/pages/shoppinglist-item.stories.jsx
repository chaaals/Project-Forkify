import React from "react";
import ShoppingItem from "./components/shoppinglist-item.component";

export default {
  title: "Shopping List/List Item",
  component: ShoppingItem,
};

const Template = (args) => <ShoppingItem {...args} />;

export const ShoppingListItem = Template.bind({});
