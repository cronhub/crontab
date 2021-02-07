import React from "react";
import styled from "styled-components";

const ContributeButton = styled.a`
  text-decoration: none;
  border-radius: 3px;
  background-color: #382b5f;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
`;

const Nav = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  ul {
    list-style: none;
    display: flex;
    margin-right: 30px;
  }
  a {
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
  }
`;

const Navbar = () => (
  <Nav>
    <ul>
      <li>
        <ContributeButton
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cronhub/crontab"
        >
          Contribute
        </ContributeButton>
      </li>
      <li></li>
    </ul>
  </Nav>
);

export default Navbar;
