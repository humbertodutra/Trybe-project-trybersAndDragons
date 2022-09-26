import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _p1: Fighter;
  private _enemies: SimpleFighter[];
  
  constructor(
    private p1: Fighter,
    private enemies: SimpleFighter[],
  ) {
    super(p1);
    this._p1 = p1;
    this._enemies = enemies; 
  }

  public get fighter(): Fighter { return this._p1; }
  public get monsters(): SimpleFighter[] { return this._enemies; }

  fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._p1.lifePoints > 0 && enemy.lifePoints > 0) {
        this._p1.attack(enemy);
        enemy.attack(this._p1);
      }
    });
    return super.fight();
  }
}