import { Injectable, inject } from '@angular/core';
import { AddPetRequest, DeletePetRequest, GetPetByIdRequest, UpdatePetRequest } from './petstore/apis';
import { HttpClient } from '@angular/common/http';
import { Pet, PetFromJSON, PetToJSON } from './petstore/models';
import { EmptyError, catchError, firstValueFrom, last, lastValueFrom, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetstoreApiService {
  private hostURL: string = 'https://petstore3.swagger.io/api/v3';
  private http = inject(HttpClient);

  getPetById(getPetByIdRequest: GetPetByIdRequest): Promise<Pet> {
    const response = this.http.get<Pet>(this.hostURL + '/pet/' + getPetByIdRequest.petId);
    return lastValueFrom(response);
  }
  addPet(addPetRequest: AddPetRequest): Promise<Pet> {
    const response = this.http.post<Pet>(this.hostURL + '/pet', PetToJSON(addPetRequest.pet)).pipe(
      map((res) => {
        return PetFromJSON(res);
      })
    );
    return lastValueFrom(response);
  }
  updatePet(putPetRequest: UpdatePetRequest): Promise<Pet> {
    const response = this.http.post<Pet>(this.hostURL + '/pet', PetToJSON(putPetRequest.pet)).pipe(
      map((res) => {
        return PetFromJSON(res);
      })
    );
    return lastValueFrom(response);
  }
  deletePet(deletePetRequest: DeletePetRequest): Promise<void> {
    const response = this.http.delete<void>(this.hostURL + '/pet/' + deletePetRequest.petId);
    return lastValueFrom(
      response.pipe(
        last(),
        catchError((error) => {
          if (error instanceof EmptyError) {
            return of(undefined);
          } else {
            throw error;
          }
        })
      )
    );
  }
}
