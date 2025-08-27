import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeroCategory, HeroClass, ICandidatBase } from '@raidleader/shared';

@Component({
  selector: 'app-hero-display',
  imports: [CommonModule],
  templateUrl: './hero-display.component.html',
  styleUrl: './hero-display.component.scss'
})
export class HeroDisplayComponent {
  @Input() candidat!: ICandidatBase;

  getHeroCategoryName(category: HeroCategory): string {
    switch (category) {
      case HeroCategory.TANK: return 'Tank';
      case HeroCategory.DPS: return 'DPS';
      case HeroCategory.HEAL: return 'Soigneur';
      case HeroCategory.TANK_DPS: return 'Tank/DPS';
      case HeroCategory.DPS_HEAL: return 'DPS/Soigneur';
      case HeroCategory.TANK_HEAL: return 'Tank/Soigneur';
      default: return 'Inconnu';
    }
  }

  getHeroClassName(heroClass: HeroClass): string {
    switch (heroClass) {
      case HeroClass.WARRIOR: return 'Guerrier';
      case HeroClass.SYMETRIST: return 'Mage';
      case HeroClass.ROGUE: return 'Voleur';
      case HeroClass.PRIEST: return 'Prêtre';
      case HeroClass.HUNTER: return 'Chasseur';
      case HeroClass.PALADIN: return 'Palouf';
      case HeroClass.WARLOCK: return 'Démoniste';
      case HeroClass.SHAMAN: return 'Chaman';
      case HeroClass.DRUID: return 'Druide';
      default: return 'Inconnu';
    }
  }
}
