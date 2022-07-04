import React from "react";
import GlobalStyles from "../../styles/globalCSS";
import styled from "styled-components";
import { colors } from "../../styles/globalCSS";

import Navbar from "./navbar.component";
import LandingUIGreet from "./landing-ui-greet.component";
import Showcase from "./landing-ui-showcase.component";

const PageContainer = styled.main`
  display: grid;
  background-color: ${colors.primary};
  max-width: 100%;
  height: 100vh;
`;

const LandingUIContainer = styled.section``;

const LandingUI = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  max-width: 80%;
  margin: 10vh auto;
  gap: 70px;
`;

const LandingFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto";
  font-size: 1rem;
  color: ${colors.accent2};
`;

const ForkifyLanding = () => {
  return (
    <PageContainer>
      <LandingUIContainer>
        <GlobalStyles />
        <Navbar />
        <LandingUI>
          <LandingUIGreet />
          <Showcase />
        </LandingUI>
      </LandingUIContainer>
      <LandingFooter>
        Redesigned and built with ❤️ by Charles Ching
      </LandingFooter>
    </PageContainer>
  );
};

const LandingPage = React.memo(ForkifyLanding);
export default LandingPage;
