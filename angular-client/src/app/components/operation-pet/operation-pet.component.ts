import { Component, inject, signal } from '@angular/core';
import { PetstoreApiService } from '../../lib/api/petstore-api.service';
import { JsonPipe } from '@angular/common';
import { Pet } from '../../lib/api/petstore/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operation-pet',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './operation-pet.component.html',
  styleUrl: './operation-pet.component.css'
})
export class OperationPetComponent {
  private petstoreApiService = inject(PetstoreApiService);
  petId: number = 0;
  data = signal<{type: "get" | "add"| "update" | "delete" | null, pet: Pet | null}>({type: null, pet: null});

  getPetById(): void {
    this.petstoreApiService.getPetById({ petId: this.petId }).then((pet) => {this.data.set({type: "get", pet})});
  }

  addPet(): void {
    const pet: Pet = {
      id: this.petId,
      category: {
        id: 1000,
        name: 'Dogs'
      },
      name: 'test',
      tags: [
        { "id": 0, "name": "string" }
      ],
      photoUrls: ['test'],
      status: 'available'
    }
    this.petstoreApiService.addPet({ pet }).then((pet) => {this.data.set({type: "add", pet})});
  }

  updatePet(): void {
    const pet: Pet = {
      id: this.petId,
      category: {
        id: 1000,
        name: 'Dogs'
      },
      name: 'test',
      tags: [
        { "id": 0, "name": "string" }
      ],
      photoUrls: ['test'],
      status: 'available'
    }
    this.petstoreApiService.updatePet({ pet }).then((pet) => {this.data.set({type: "update", pet})});
  }

  deletePet(): void {
    this.petstoreApiService.deletePet({ petId: this.petId }).catch((e) => {console.log('error', e)}).finally(() => {this.data.set({type: "delete", pet: null})});
  }
}
