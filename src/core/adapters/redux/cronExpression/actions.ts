const getCronConfigActionType = (type: string) => `CRON_CONFIG/${type}`;

export interface ActionType<T, P> {
  readonly type: T;
  readonly payload: P;
}

export const GET_CRON_HUMAN_EXPRESSION = getCronConfigActionType(
  "GET_CRON_HUMAN_EXPRESSION"
);

export const GET_CRON_HUMAN_EXPRESSION_SUCCESS = getCronConfigActionType(
  "GET_CRON_HUMAN_EXPRESSION_SUCCESS"
);

export type GetCronHumanExpressionActionType = ActionType<
  typeof GET_CRON_HUMAN_EXPRESSION,
  string
>;

export const getCronHumanExpression = (schedule: string) => ({
  type: GET_CRON_HUMAN_EXPRESSION,
  payload: schedule
});

export type GetCronHumanExpressionSuccessActionType = ActionType<
  typeof GET_CRON_HUMAN_EXPRESSION_SUCCESS,
  string
>;

export const getCronHumanExpressionSuccess = (humanExpression: string) => ({
  type: GET_CRON_HUMAN_EXPRESSION_SUCCESS,
  payload: humanExpression
});
