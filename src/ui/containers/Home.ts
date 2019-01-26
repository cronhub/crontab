import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { Home } from "../screens";

const DecoratedHomeForm = reduxForm({
  form: "CronConfigForm",
  destroyOnUnmount: false
})(Home);

export const HomeContainer = connect()(DecoratedHomeForm);
