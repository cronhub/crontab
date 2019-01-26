import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar } from "./components";
import { HomeContainer } from "./containers";
import { About } from "./screens";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 100%;
`;

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/about" component={About} />
      </Container>
    </Router>
  );
}

export default App;
