import { Injectable } from '@angular/core';
import { GetPetByIdRequest, PetApi } from './petstore/apis';
import { Configuration } from './petstore/runtime';

@Injectable({
  providedIn: 'root'
})
export class PetstoreApiService {
  private hostURL: string = 'https://petstore.swagger.io/v2';
  private petApi = new PetApi(new Configuration({
    basePath: this.hostURL, // override base path
  }));

  getPetById(getPetByIdRequest: GetPetByIdRequest) {
    return this.petApi.getPetById(getPetByIdRequest);
  }
}
