import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import Input from "./components/Input";

const ContributeButton = styled.a`
  text-decoration: none;
  border-radius: 3px;
  background-color: #382b5f;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
`;

const Header = styled.header`
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  padding: 10px 20px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
  a {
    text-decoration: none;
    padding: 15px;
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 100%;
`;

const ValuePropContainer = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #382a5fa3;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 768px;
`;

const App = ({ children }) => {
  return (
    <Container>
      <Header>
        <Nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <ContributeButton
                target="_blank"
                href="github.com"
                rel="noopener noreferrer"
                href="https://github.com/cronhub-app"
              >
                Contribute
              </ContributeButton>
            </li>
          </ul>
        </Nav>
      </Header>
      <InnerContainer>
        <ValuePropContainer>Cron expression generator by <a href="https://cronhub.io?ref=crontab">Cronhub</a></ValuePropContainer>
        <Input />
      </InnerContainer>
    </Container>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;
