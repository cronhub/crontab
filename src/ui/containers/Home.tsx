import { connect } from "react-redux";
import { reduxForm, focus } from "redux-form";
import { Dispatch } from "redux";

import { Home } from "../screens";
import { isRequired } from "../../utils";

import { getHumanReadableDescription } from "../../core/adapters";

interface State {
  cronExpression: {
    humanExpression: string;
  };
}

interface CronConfigFormValues {
  cronExpression: string;
}

const mapStateToProps = (state: State) => ({
  humanExpression: state.cronExpression.humanExpression
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getHumanReadableDescription: (schedule: string) =>
    dispatch(getHumanReadableDescription(schedule)),
});

const validate = (values: CronConfigFormValues) => ({
  cronExpression: isRequired(values.cronExpression)
});

const DecoratedHomeForm = reduxForm({
  form: "CronScheduleForm",
  destroyOnUnmount: false,
  validate,
  initialValues: {
    cronExpression: "*/5 * * * *"
  }
})(Home);

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DecoratedHomeForm);
