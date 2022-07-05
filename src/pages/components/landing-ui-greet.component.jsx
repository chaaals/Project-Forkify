import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/globalCSS";
import { colors } from "../../styles/globalCSS";

import { SearchBar } from "./navbar.component";

const GreetContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 21px;
`;

const Greet = styled.div`
  max-width: 600px;
  color: ${colors.accent2};
  h1 {
    font-family: "Raleway";
    font-size: 86px;
  }

  h4 {
    font-family: "Roboto";
    font-size: 30px;
    font-weight: 100;
  }

  span {
    color: ${colors.accent1};
  }
`;

const DescriptionContainer = styled.div`
  max-width: 600px;
`;

const Description = styled.p`
  font-family: "Roboto";
  font-size: 20px;

  color: ${colors.secondary};
`;

const LandingBtn = styled.button`
  box-sizing: border-box;
  font-size: 1rem;
  padding: 1em 1.5em;

  border: none;
  background-color: ${colors.accent2};
  color: ${colors.primary};

  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.accent1};
    color: ${colors.primary};
    transform: translateY(-4px);
  }

  transition: 500ms ease-in-out;
`;

const Greeting = ({ reference }) => {
  const startSearching = () => {
    reference.current.focus();
  };
  return (
    <GreetContainer>
      <GlobalStyles />
      <Greet>
        <h4>Hey,</h4>
        <h1>
          Welcome to <span>Forkify</span>
        </h1>
      </Greet>

      <DescriptionContainer>
        <Description>
          A recipe finder that helps you plan out your shopping list!
        </Description>
      </DescriptionContainer>

      <LandingBtn onClick={startSearching}>START SEARCHING</LandingBtn>
    </GreetContainer>
  );
};

const LandingUIGreet = React.memo(Greeting);
export default LandingUIGreet;
