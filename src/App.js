import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";
import { Input, Helper } from "./components";

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
`;

const Nav = styled.nav`
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
  font-family: "Source Code Pro", monospace;
  margin-bottom: 40px;

  a {
    font-family: "Source Code Pro", monospace;
    color: #382b5f;
  }
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

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Nav>
            <ul>
              <li>
                <ContributeButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/cronhub-app/crontab"
                >
                  Contribute
                </ContributeButton>
              </li>
            </ul>
          </Nav>
        </Header>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Container>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Home() {
  return (
    <InnerContainer>
      <ValuePropContainer>
        Cron expression generator by{" "}
        <a href="https://cronhub.io?ref=crontab" rel="nofollow" title="">
          Cronhub
        </a>
      </ValuePropContainer>
      <Input />
      <Helper />
    </InnerContainer>
  );
}

export default App;
