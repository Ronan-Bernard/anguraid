import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { ICandidatBase } from '@raidleader/shared';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  constructor() { }

  async getCandidats(): Promise<ICandidatBase[]> {
    const apiDomain = environment.API_DOMAIN;
    const response = await axios.get(`${apiDomain}/api/candidat`);
    return response.data;
  }
}
