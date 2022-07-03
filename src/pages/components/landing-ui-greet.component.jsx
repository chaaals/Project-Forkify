import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/globalCSS";
import { colors } from "../../styles/globalCSS";

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
    font-size: 96px;
  }

  h4 {
    font-family: "Roboto";
    font-size: 40px;
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
  font-size: 32px;

  color: ${colors.secondary};
`;

const LandingBtn = styled.button`
  font-size: 1rem;
  padding: 1em 1.5em;

  border: none;
  background-color: ${colors.accent2};
  color: ${colors.primary};

  border-radius: 10px;
  cursor: pointer;
`;

const Greeting = () => {
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

      <LandingBtn>START SEARCHING</LandingBtn>
    </GreetContainer>
  );
};

const LandingUIGreet = React.memo(Greeting);
export default LandingUIGreet;