import { connect } from "react-redux";

import { Helper } from "../components";

const mapStateToProps = () => ({
  cronExpressions: [
    {
      expression: "* * * * *",
      schedule: "Every minute"
    },
    {
      expression: "0 * * * *",
      schedule: "Every hour"
    },
    {
      expression: "0 0 * * *	",
      schedule: "Every day at 12:00 AM"
    },
    {
      expression: "0 0 * * FRI",
      schedule: "At 12:00 AM, only on Friday"
    },
    {
      expression: "0 0 1 * *",
      schedule: "At 12:00 AM, on day 1 of the month"
    }
  ],
  helpers: [
    "minute (0-59)",
    "hour (0 - 23)",
    "day of the month (1 - 31)",
    "month (1 - 12)",
    "day of the week (0 - 6)"
  ]
});

export const HelperContainer = connect(
  mapStateToProps,
  null
)(Helper);
