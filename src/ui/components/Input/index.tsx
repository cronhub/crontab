import * as React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  padding: 0.5em;
  color: white;
  border-radius: 3px;
  text-align: center;
  font-size: 130%;
  background-color: #382b5f;
  border: none;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ErrorWrapper = styled.div`
  margin-top: 0.25rem;
`;

const ErrorText = styled.span`
  color: #ff5d63;
  font-size: 0.75rem;
`;

const Input = ({
  input,
  label,
  type,
  meta: { active, error },
  ...rest
}: any) => (
  <InputWrapper>
    <InputElement
      error
      active
      {...input}
      placeholder={label}
      type={type}
      {...rest}
    />
    <ErrorWrapper>
      {active && error && <ErrorText>{error}</ErrorText>}
    </ErrorWrapper>
  </InputWrapper>
);

export default Input;
