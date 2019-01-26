import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e9e4f7;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  margin: 0 0 1rem;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  padding: 40px;
`;

const HelpTable = styled.table`
  border: 1px solid #e9e4f7;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 12px;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);

  thead th {
    background-color: #f3ebff;
    border: 1px solid #dcc5ff;
    color: #382b5f;
    padding: 10px;
  }

  tbody td {
    border: 1px solid #e9e4f7;
    color: #333;
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
    text-align: center;
  }
`;

const HelperText = styled.div`
  color: #3d4852;
  padding-bottom: 10px;
  padding-top: 10px;
`;

interface CronExpression {
  expression: string;
  schedule: string;
}

const Helper = ({
  cronExpressions,
  helpers
}: {
  cronExpressions: Array<CronExpression>;
  helpers: Array<string>;
}) => (
  <Wrapper>
    <HelperText>
      The cron expression is made of five fields. Each field can have the
      following values.
    </HelperText>
    <HelpTable>
      <thead>
        <tr>
          {helpers.map((helper: string, index: number) => (
            <th key={index}>*</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {helpers.map((helper: string, index: number) => (
            <td key={index}>{helper}</td>
          ))}
        </tr>
      </tbody>
    </HelpTable>
    <br />
    <HelperText>Here are some example for you.</HelperText>
    <HelpTable>
      <thead>
        <tr>
          <th>Cron expression</th>
          <th>Schedule</th>
        </tr>
      </thead>
      <tbody>
        {cronExpressions.map((row: CronExpression, index: number) => (
          <tr key={index}>
            <td>{row.expression}</td>
            <td>{row.schedule}</td>
          </tr>
        ))}
      </tbody>
    </HelpTable>
  </Wrapper>
);

export default Helper;
