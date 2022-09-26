import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    private p1: Fighter,
    private p2: Fighter,
  ) {
    super(p1);
  }

  public get playerOne(): Fighter { return this.p1; }
  public get playerTwo(): Fighter { return this.p2; }

  fight(): number {
    while (this.p1.lifePoints > 0 && this.p2.lifePoints > 0) {
      this.p1.attack(this.p2);
      this.p2.attack(this.p1);
    }

    const result = super.fight();
    return result;
  }
}