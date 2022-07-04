import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/globalCSS";
import GlobalStyles from "../../styles/globalCSS";

const DcContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 290px;
  height: 104px;
  box-sizing: border-box;

  border: 2px solid ${colors.secondary};
  border-radius: 20px;

  cursor: pointer;
  padding: 1.25rem;

  &:hover {
    border: 2px solid ${colors.accent2};
  }
`;

const DishImg = styled.div`
  --size: 70px;

  width: var(--size);
  height: var(--size);

  border-radius: 50%;
  background-color: ${colors.accent2};

  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DishContent = styled.section`
  display: grid;
  width: 162px;
`;

export const DishName = styled.h4`
  font-family: "Raleway";
  font-size: 20px;
  color: ${colors.accent2};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DishAuthor = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  color: ${colors.accent1};

  text-transform: uppercase;
`;

const DishCardDesign = ({ dish }) => {
  return (
    <>
      <GlobalStyles />
      <DcContainer>
        <DishImg url={dish.url} />
        <DishContent>
          <DishName>{dish.name}</DishName>
          <DishAuthor>{dish.author}</DishAuthor>
        </DishContent>
      </DcContainer>
    </>
  );
};

const DishCard = React.memo(DishCardDesign);
export default DishCard;
