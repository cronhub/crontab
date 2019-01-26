import { connect } from "react-redux";
import { reduxForm, focus, formValueSelector } from "redux-form";
import { Dispatch } from "redux";

import { Home } from "../screens";

import { getCronHumanExpression } from "../../core/adapters";

const selector = formValueSelector("selectingFormValues");

interface State {
  cronExpression: {
    humanExpression: string;
  };
}

const mapStateToProps = (state: State) => ({
  humanExpression: state.cronExpression.humanExpression,
  cronExpressionValue: selector(state, "cronExpression")
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCronHumanExpression: (schedule: string) =>
    dispatch(getCronHumanExpression(schedule)),
  focusOnCronExpressionInput: () =>
    dispatch(focus("CronConfigForm", "cronExpression"))
});

const DecoratedHomeForm = reduxForm({
  form: "CronConfigForm",
  destroyOnUnmount: false,
  initialValues: {
    cronExpression: "*/5 * * * *"
  }
})(Home);

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DecoratedHomeForm);
