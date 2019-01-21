import * as React from "react";
import styled from "styled-components";
import cronstrue from "cronstrue";

const InputWrapper = styled.input`
  padding: 0.5em;
  color: #f3ebff;
  border: none;
  border-radius: 3px;
  text-align: center;
  font-size: 200%;
  border-radius: 0.5em;
  background-color: #382b5f;
`;

const HumanTextWrapper = styled.div`
  display: flex;
  padding: 10px;
  font-weight: bold;
  color: #382b5f;
  font-size: 25px;
  align-items: center;
`;

const HumanText = styled.div``;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e9e4f7;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(48,71,89,0.05);
  margin: 0 0 1rem;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  padding: 20px;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "* 2 * * *" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  makeHuman(schedule) {
    try {
      const humanSchedule = cronstrue.toString(schedule);
      return humanSchedule;
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const schedule = this.state.value;
    return (
      <Wrapper>
        <HumanTextWrapper>
          <HumanText>
            {this.makeHuman(schedule, { use24HourTimeFormat: true })}
          </HumanText>
        </HumanTextWrapper>
        <InputWrapper
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <span>minute hour day month day</span>
      </Wrapper>
    );
  }
}

export default Input;
