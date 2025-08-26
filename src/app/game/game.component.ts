import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RaidComponent } from './raid/raid.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartBar,
  faDragon,
  faMapLocationDot,
  faPeopleGroup,
  faPeoplePulling
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game',
  imports: [
    MatTabsModule,
    RaidComponent,
    RecrutementComponent,
    FontAwesomeModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  dragonIcon = faDragon;
  mapIcon = faMapLocationDot;
  peopleIcon = faPeopleGroup;
  peoplePullIcon = faPeoplePulling;
  chartIcon = faChartBar;
}
