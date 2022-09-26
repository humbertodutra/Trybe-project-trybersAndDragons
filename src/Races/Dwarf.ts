import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  protected static instances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
