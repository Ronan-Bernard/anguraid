import { HeroCategory, ICandidatWithMethods } from '@raidleader/shared';

export class Candidat implements ICandidatWithMethods {
  private static readonly IS_TANK = [0, 3, 5];
  private static readonly IS_DPS = [1, 3, 4];
  private static readonly IS_HEAL = [2, 4, 5];

  constructor(
    public id: number,
    public name: string,
    public heroCategory: HeroCategory,
    public heroClass: any,
    public equipement: number,
    public fidelite: number,
    public discipline: number,
    public egoisme: number,
    public leadership: number
  ) {}

  get isTank(): boolean {
    return Candidat.IS_TANK.includes(this.heroCategory);
  }

  get isHeal(): boolean {
    return Candidat.IS_HEAL.includes(this.heroCategory);
  }

  get isDPS(): boolean {
    return Candidat.IS_DPS.includes(this.heroCategory);
  }

  // Méthode helper pour créer un Candidat depuis une API response
  static fromApiResponse(data: any): Candidat {
    return new Candidat(
      data.id,
      data.name,
      data.heroCategory,
      data.heroClass,
      data.equipement,
      data.fidelite,
      data.discipline,
      data.egoisme,
      data.leadership
    );
  }
}
