import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICandidatBase } from '@raidleader/shared';
import { CandidatService } from '../../services/candidat.service';
import { CompositionComponent } from '../composition/composition.component';
import { HeroDisplayComponent } from '../hero-display/hero-display.component';

@Component({
  selector: 'Recrutement',
  imports: [
    CommonModule,
    CompositionComponent,
    HeroDisplayComponent
  ],
  templateUrl: './recrutement.component.html',
  styleUrl: './recrutement.component.scss'
})
export class RecrutementComponent implements OnInit {
  candidats: ICandidatBase[] = [];
  loading = true;
  error: string | null = null;

  constructor(private candidatService: CandidatService) {}

  async ngOnInit() {
    try {
      this.candidats = await this.candidatService.getCandidats();
      // Limiter à 10 candidats comme demandé
      this.candidats = this.candidats.slice(0, 10);
    } catch (error) {
      console.error('Erreur lors du chargement des candidats:', error);
      this.error = 'Impossible de charger les candidats';
    } finally {
      this.loading = false;
    }
  }
}
