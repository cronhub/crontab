import { CronHumanDescriptionGateway } from "../gateways";

export class GetHumanReadableDescription {
  private _cronHumanExpressionGateway: CronHumanDescriptionGateway;

  constructor(cronHumanExpressionGateway: CronHumanDescriptionGateway) {
    this._cronHumanExpressionGateway = cronHumanExpressionGateway;
  }

  public async execute(schedule: string) {
    return this._cronHumanExpressionGateway.getHumanReadableDescription(
      schedule
    );
  }
}
