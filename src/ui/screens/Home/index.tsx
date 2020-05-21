import React, { Component } from "react";
import styled from "styled-components";
import { Field, InjectedFormProps } from "redux-form";
import { Input } from "../../components";
import { HelperContainer } from "../../containers";

export const InnerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 768px;
`;

const ValuePropContainer = styled.header`
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

const HumanTextWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 20px;
  font-weight: bold;
  color: #382b5f;
  font-size: 22px;
  align-items: center;
  font-family: monospace;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: baseline;
  flex-direction: row;
  background: #fff;
  border: 1px solid #e9e4f7;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  margin: 0 0 1rem;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  padding: 40px;
`;

interface HomeProps {
  getHumanReadableDescription: Function;
}

interface CronConfigFormValues {
  cronExpression: string;
}

export default class Home extends Component<
  any & InjectedFormProps<CronConfigFormValues> & HomeProps
> {
  componentDidMount() {
    const {
      getHumanReadableDescription,
      initialValues: { cronExpression }
    } = this.props;
    getHumanReadableDescription(cronExpression);
  }

  render() {
    const { getHumanReadableDescription, humanExpression } = this.props;

    return (
      <InnerContainer>
        <ValuePropContainer>
          Cron expression generator by{" "}
          <a href="https://cronhub.io" title="">
            Cronhub
          </a>
        </ValuePropContainer>
        <Wrapper>
          <Field
            name="cronExpression"
            component={Input}
            type="text"
            autoFocus
            onChange={event =>
              getHumanReadableDescription(event && event.target.value)
            }
          />
          <HumanTextWrapper>
            <span>{humanExpression}</span>
          </HumanTextWrapper>
        </Wrapper>

        <HelperContainer />
      </InnerContainer>
    );
  }
}
