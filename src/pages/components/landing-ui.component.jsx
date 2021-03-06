import React, { useRef } from "react";
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
  padding: 1rem;
`;

const LandingUIContainer = styled.section``;

const LandingUI = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 85%;
  margin: 10vh auto;
  gap: 70px;
`;

const ForkifyLanding = () => {
  const searchInput = useRef(null);
  return (
    <PageContainer>
      <LandingUIContainer>
        <GlobalStyles />
        <Navbar reference={searchInput} />
        <LandingUI>
          <LandingUIGreet reference={searchInput} />
          <Showcase />
        </LandingUI>
      </LandingUIContainer>
    </PageContainer>
  );
};

const LandingPage = React.memo(ForkifyLanding);
export default LandingPage;
