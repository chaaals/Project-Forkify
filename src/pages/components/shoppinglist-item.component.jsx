import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import GlobalStyles from "../../styles/globalCSS";
import { colors } from "../../styles/globalCSS";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  width: 70%;
  height: 70px;

  border-radius: 20px;
  border: 2px solid ${colors.accent2};

  padding: 1.5rem;
`;

const ItemContentContainer = styled.div`
  display: grid;
  width: 100px;
`;

const ItemQuantity = styled.input`
  outline: none;
  border: 1px solid ${colors.accent2};

  --size: 10%;
  width: var(--size);
  height: 20px;

  padding: 0.25rem;
`;

const ItemContent = styled.p`
  font-family: "Roboto";

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ItemDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  --size: 40px;
  width: var(--size);
  height: var(--size);

  font-size: 1rem;
  border-radius: 10px;
  color: ${colors.accent2};

  border: none;
  background: none;

  cursor: pointer;

  &:hover {
    color: orangered;
  }
`;

const ListItem = () => {
  return (
    <>
      <GlobalStyles />
      <ListItemContainer>
        <ItemQuantity type="number" />
        <ItemContentContainer>
          <ItemContent>Ingredient Name adgasdgasdgsdgsdgasdg</ItemContent>
        </ItemContentContainer>

        <ItemContentContainer>
          <ItemContent>Dish Name</ItemContent>
        </ItemContentContainer>
        <ItemDelete>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </ItemDelete>
      </ListItemContainer>
    </>
  );
};

const ShoppingItem = React.memo(ListItem);
export default ShoppingItem;
