import { Component } from '@angular/core';
import { OperationPetComponent } from '../../components/operation-pet/operation-pet.component';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [OperationPetComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

}
