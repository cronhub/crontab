import cronstrue from "cronstrue";

import { CronHumanDescriptionGateway } from "./CronHumanDescriptionGateway";

export class CronHumanDescription implements CronHumanDescriptionGateway {
  public getHumanReadableDescription(schedule: string) {
    return cronstrue.toString(schedule);
  }
}
