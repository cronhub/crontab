export interface CronHumanDescriptionGateway {
  getHumanReadableDescription: (schedule: string) => string;
}
