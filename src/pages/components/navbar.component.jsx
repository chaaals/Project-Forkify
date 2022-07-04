import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/globalCSS";

import { colors } from "../../styles/globalCSS";

import { ForkifyLogo } from "../../icons/forkify.icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.header``;
const Nav = styled.nav`
  box-sizing: border-box;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);

  padding: 1rem;
  max-width: 90%;
  margin: 0 auto;
`;

const SearchBarContainer = styled.div`
  --size: 40px;
  position: relative;
  display: flex;
  border-radius: 50px;

  width: var(--size);
  height: var(--size);

  opacity: ${(props) => (props.state ? 1 : 0)};
  &:focus-within {
    width: 100%;
    border: 1px solid ${colors.accent2};

    button {
      background-color: ${colors.primary};
      color: ${colors.accent2};
    }

    input {
      width: 75%;
      color: ${colors.accent2};
      opacity: 1;
      cursor: initial;
    }
  }

  transition: width 500ms cubic-bezier(0.18, 0.89, 0.32, 1.1);
  overflow: hidden;
`;

const Search = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  flex-grow: 1;
  font-size: 1rem;
  font-family: "Roboto";

  padding: 0.25em 1em;
  border: none;
  background-color: ${colors.primary};

  opacity: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const SearchBtn = styled.button`
  --size: 40px;
  font-size: 1rem;
  width: var(--size);
  height: var(--size);

  border: none;
  border-radius: 50%;
  cursor: pointer;

  margin-left: auto;
  background-color: ${colors.accent2};
  color: ${colors.primary};

  transition: 150ms ease-in-out;

  &:focus,
  &:hover {
    outline: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecipeList = styled.div`
  --size: 40px;
  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--size);
  height: var(--size);

  background-color: ${colors.accent2};
  color: ${colors.primary};

  border-radius: 50%;
  cursor: pointer;
`;

export const SearchBar = ({ state }) => {
  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <>
      <GlobalStyles />
      <SearchBarContainer state={state}>
        <Search
          type="text"
          placeholder="Start searching for a recipe"
          ref={searchInput}
        />
        <SearchBtn>
          <FontAwesomeIcon icon={faSearch} />
        </SearchBtn>
      </SearchBarContainer>
    </>
  );
};

const ForkifyNav = () => {
  return (
    <>
      <GlobalStyles />
      <NavContainer>
        <Nav>
          <SearchBar state={false} />
          <LogoContainer>
            <ForkifyLogo />
          </LogoContainer>
          <RecipeList>
            <FontAwesomeIcon icon={faBasketShopping} />
          </RecipeList>
        </Nav>
      </NavContainer>
    </>
  );
};

const Navbar = React.memo(ForkifyNav);
export default Navbar;
