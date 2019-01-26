export interface CronHumanExpressionGateway {
  getCronHumanExpression: (schedule: string) => string;
}
