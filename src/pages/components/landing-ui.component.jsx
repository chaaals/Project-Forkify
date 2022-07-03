import React from "react";
import GlobalStyles from "../../styles/globalCSS";
import styled from "styled-components";
import { colors } from "../../styles/globalCSS";

import Navbar from "./navbar.component";
import LandingUIGreet from "./landing-ui-greet.component";

const LandingUIContainer = styled.main`
  background-color: ${colors.primary};
  border: 1px solid black;
  height: 100vh;
`;

const LandingUI = styled.section`
  display: flex;
  box-sizing: border-box;

  max-width: 90%;
  margin: 10vh auto;
`;

const ForkifyLanding = () => {
  return (
    <LandingUIContainer>
      <GlobalStyles />
      <Navbar />
      <LandingUI>
        <LandingUIGreet />
      </LandingUI>
    </LandingUIContainer>
  );
};

const LandingPage = React.memo(ForkifyLanding);
export default LandingPage;
