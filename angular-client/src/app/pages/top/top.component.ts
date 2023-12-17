import { Component, inject } from '@angular/core';
import { PetListComponent } from '../../components/pet-list/pet-list.component';
import { PetstoreApiService } from '../../lib/api/petstore-api.service';
import { JsonPipe } from '@angular/common';
import { Pet } from '../../lib/api/petstore/models';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [PetListComponent, JsonPipe],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  private petstoreApiService = inject(PetstoreApiService);
  pet!: Pet;
  ngOnInit(): void {
    this.petstoreApiService.getPetById({ petId: 10 }).then((pet) => {this.pet = pet});
  }
}
