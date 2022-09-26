import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(
    private _lifePoints = 85,
    private _strength = 63,
  ) {
    this._lifePoints = _lifePoints;
    this._strength = _strength;
  }

  public get lifePoints():number { return this._lifePoints; }
  public get strength():number { return this._strength; }
  
  receiveDamage(attackPoints: number): number {
    const lifeToRemove = this._lifePoints - attackPoints;
    if (lifeToRemove > 0) {
      this._lifePoints = lifeToRemove;
    } else {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}