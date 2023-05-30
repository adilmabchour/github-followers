import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getService() : string[]{
    return ["Angular","Symfony","Laravel","VueJs","FireBase"];
  }
}
