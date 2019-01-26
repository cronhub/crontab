import cronstrue from "cronstrue";

import { CronHumanExpressionGateway } from "./CronHumanExpressionGateway";

export class CronHumanExpression implements CronHumanExpressionGateway {
  public getCronHumanExpression(schedule: string) {
    return cronstrue.toString(schedule);
  }
}
