import { CronHumanExpressionGateway } from "../gateways";

export class GetCronHumanExpression {
  private _cronHumanExpressionGateway: CronHumanExpressionGateway;

  constructor(cronHumanExpressionGateway: CronHumanExpressionGateway) {
    this._cronHumanExpressionGateway = cronHumanExpressionGateway;
  }

  public async execute(schedule: string) {
    return this._cronHumanExpressionGateway.getCronHumanExpression(schedule);
  }
}
