import { Component } from '@angular/core';
import { CompositionComponent } from "../composition/composition.component";

@Component({
  selector: 'Raid',
    imports: [
        CompositionComponent
    ],
  templateUrl: './raid.component.html',
  styleUrl: './raid.component.scss'
})
export class RaidComponent {

}
