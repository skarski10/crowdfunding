export class Project {
  public id: number;
  constructor(
    public title: string,
    public creator: string,
    public description: string,
    public image: string,
    public goal: number,
    public daysLeft: number
  ) {}
}
