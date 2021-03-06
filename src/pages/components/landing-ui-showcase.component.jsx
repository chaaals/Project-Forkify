import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/globalCSS";

const ContainerOutline = styled.div`
  align-self: center;
  justify-self: end;

  position: relative;
  --size: 450px;

  width: var(--size);
  height: var(--size);

  border: 2px solid ${colors.accent2};
`;

const ImgContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  --size: 450px;

  width: var(--size);
  height: var(--size);

  background-color: ${colors.secondary};
  background: url("https://images.unsplash.com/photo-1546241072-48010ad2862c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  transition: 300ms ease-in-out;
`;

const LandingShowcase = () => {
  return (
    <>
      <ContainerOutline>
        <ImgContainer />
      </ContainerOutline>
    </>
  );
};

const Showcase = React.memo(LandingShowcase);
export default Showcase;
