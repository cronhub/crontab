import React from "react";
import styled from "styled-components";
import { Input, Helper } from "../../components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 768px;
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

const Home = () => (
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

export default Home;
