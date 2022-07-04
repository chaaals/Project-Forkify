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

  background-color: ${colors.primary};
  border: 2px solid ${colors.accent2};
  border-radius: 20px;

  padding: 0rem 0rem 1.25rem 0rem;
  overflow: hidden;
`;

const DICover = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 370px;

  background-color: ${colors.secondary};
  border-bottom: 2px solid ${colors.accent2};

  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  gap: 40px;
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
  font-size: 1rem;

  padding: 0.7em 1.5em;
  border-radius: 10px;

  height: var(--size);

  color: ${colors.primary};
  background-color: ${colors.accent2};

  gap: 6px;
  cursor: pointer;

  .icon {
    font-size: 0.8rem;
  }

  &:hover {
    background-color: ${colors.accent1};
  }
`;

const BookmarkBtn = styled.button`
  --size: 40px;
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

const InstructionsContainer = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 250px;
  border: 1px solid ${colors.secondary};
  border-radius: 20px;
`;

const InstructionHeading = styled.p`
  position: absolute;
  top: -10px;

  font-family: "Roboto";
  font-size: 1rem;

  background-color: ${colors.primary};
  color: ${colors.accent1};

  padding: 0em 1em;
`;

const InstructionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 30px;
  width: 80%;
  margin: 0 auto;

  p {
    font-family: "Roboto";
    text-align: center;

    color: ${colors.accent1};
  }
`;

const InstructionBtn = styled(AddBtn)``;

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
          </DishInfo>

          <InstructionsContainer>
            <InstructionHeading>HOW TO COOK IT</InstructionHeading>
            <InstructionContent>
              <p>
                This recipe was carefully designed and tested by{" "}
                <strong>{dish.author}</strong>. Please check out directions at
                their website.
              </p>
              <InstructionBtn>DIRECTIONS</InstructionBtn>
            </InstructionContent>
          </InstructionsContainer>
          <DishBtnContainer>
            <AddBtn>
              <FontAwesomeIcon className="icon" icon={faBasketShopping} />
              Add to List
            </AddBtn>
            <BookmarkBtn>
              <FontAwesomeIcon icon={faBookmark} />
            </BookmarkBtn>
          </DishBtnContainer>
        </DishInfoContainer>
      </DishContent>
    </DIContainer>
  );
};

const DishRecipe = React.memo(DishInformation);
export default DishRecipe;
