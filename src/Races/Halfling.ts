import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  protected static instances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
