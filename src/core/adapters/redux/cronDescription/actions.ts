const getCronDescriptionActionType = (type: string) =>
  `GET_CRON_DESCRIPTION/${type}`;

export interface ActionType<T, P> {
  readonly type: T;
  readonly payload: P;
}

export const GET_HUMAN_READABLE_DESCRIPTION = getCronDescriptionActionType(
  "GET_HUMAN_READABLE_DESCRIPTION"
);

export const GET_HUMAN_READABLE_DESCRIPTION_SUCCESS = getCronDescriptionActionType(
  "GET_HUMAN_READABLE_DESCRIPTION_SUCCESS"
);

export type GetHumanReadableDescriptionActionType = ActionType<
  typeof GET_HUMAN_READABLE_DESCRIPTION,
  string
>;

export const getHumanReadableDescription = (schedule: string) => ({
  type: GET_HUMAN_READABLE_DESCRIPTION,
  payload: schedule
});

export type GetHumanReadableDescriptionSuccessActionType = ActionType<
  typeof GET_HUMAN_READABLE_DESCRIPTION_SUCCESS,
  string
>;

export const getHumanReadableDescriptionSuccess = (
  humanExpression: string
) => ({
  type: GET_HUMAN_READABLE_DESCRIPTION_SUCCESS,
  payload: humanExpression
});
