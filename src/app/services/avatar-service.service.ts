import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../utils/data-service';

@Injectable({
  providedIn: 'root'
})
export class AvatarServiceService extends DataService {

  constructor(http : HttpClient) {
    super("https://api.github.com/users/IDBRAHIMDEV/followers",http)
   }
}
