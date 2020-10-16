import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    list-style-type: none;
    color: black;
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  width: 100px;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-weight: bolder;
  text-align: left;
`;

const LinkStyle = styled(NavLink)`
  &:link {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    color: #cc43a1;
  }

  &.active {
    color: pink;
  }
`;

const Header = () => {
  return (
    <HeaderLinks className="header-links">
      <Title className="title">Fruit Emporium</Title>
      <LinksContainer className="links">
        <li>
          <LinkStyle to="/" className="link">
            Home
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/about" className="link">
            About
          </LinkStyle>
        </li>
      </LinksContainer>
    </HeaderLinks>
  );
};

export default Header;
