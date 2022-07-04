import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/globalCSS";
import GlobalStyles from "../../styles/globalCSS";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPerson,
  faCircleCheck,
  faBasketShopping,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
const DIContainer = styled.div`
  box-sizing: border-box;
  width: 925px;

  border: 2px solid ${colors.accent2};
  border-radius: 20px;

  padding: 1.25rem 0rem;
`;

const DICover = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 370px;

  background-color: ${colors.secondary};
  border-top: 2px solid ${colors.accent2};
  border-bottom: 2px solid ${colors.accent2};

  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  filter: opacity(70%);
`;

const DishContent = styled.section`
  display: grid;
  gap: 10px;

  width: 90%;
  margin: 2.5vh auto;
`;
const DishHeading = styled.div``;
const DishName = styled.h1`
  font-family: "Raleway";
  font-size: 64px;
  color: ${colors.accent2};
`;

const DishAuthor = styled.h4`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 24px;
  color: ${colors.accent1};
`;

const DishInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const DishInfo = styled.section`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(2, 1fr);

  box-sizing: border-box;
  gap: 20px;
`;

const DishMainInfo = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-family: "Roboto";

  color: ${colors.accent2};
  border: 1px solid ${colors.accent2};
  padding: 0.5em 1.2em;

  border-radius: 20px;
  gap: 10px;
`;

const DishIng = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: "Roboto";
  color: ${colors.accent2};
  padding-left: 5px;
`;

const DishBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddBtn = styled.button`
  display: flex;
  align-items: center;

  border: none;
  font-size: 0.8rem;

  padding: 0.8em 1.5em;
  border-radius: 10px;

  --size: 35px;
  height: var(--size);

  color: ${colors.primary};
  background-color: ${colors.accent2};

  gap: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.accent1};
  }
`;

const BookmarkBtn = styled.button`
  --size: 35px;
  border: none;
  font-size: 0.8rem;

  width: var(--size);
  height: var(--size);

  color: ${colors.primary};
  background-color: ${colors.accent2};

  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.accent1};
  }
`;

const DishIngredient = ({ quantity, ingredient }) => {
  return (
    <DishIng>
      <FontAwesomeIcon icon={faCircleCheck} />
      {quantity} {ingredient}
    </DishIng>
  );
};

const DishInformation = ({ dish }) => {
  const { ingredients } = dish;

  const ingJSX = ingredients.map((data) => (
    <DishIngredient quantity={data.qty} ingredient={data.ing} />
  ));
  return (
    <DIContainer>
      <GlobalStyles />
      <DICover url={dish.url} />
      <DishContent>
        <DishHeading>
          <DishAuthor>{dish.author}'s</DishAuthor>
          <DishName>{dish.name}</DishName>
        </DishHeading>
        <DishInfoContainer>
          <DishInfo>
            <DishMainInfo>
              <FontAwesomeIcon icon={faClock} />
              {dish.duration} {dish.duration > 1 ? "Minutes" : "Minute"}
            </DishMainInfo>
            <DishMainInfo>
              <FontAwesomeIcon icon={faPerson} />
              {dish.servings} {dish.servings > 1 ? "People" : "Person"}
            </DishMainInfo>

            {ingJSX}

            <DishBtnContainer>
              <AddBtn>
                <FontAwesomeIcon icon={faBasketShopping} />
                ADD TO LIST
              </AddBtn>
              <BookmarkBtn>
                <FontAwesomeIcon icon={faBookmark} />
              </BookmarkBtn>
            </DishBtnContainer>
          </DishInfo>
        </DishInfoContainer>
      </DishContent>
    </DIContainer>
  );
};

const DishRecipe = React.memo(DishInformation);
export default DishRecipe;
