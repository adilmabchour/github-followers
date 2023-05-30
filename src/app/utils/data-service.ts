import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
export class DataService {
  constructor(private url : string,private http : HttpClient){
  }

  getAll(){
    return this.http.get(this.url).pipe(
      catchError((err : HttpErrorResponse) => {
        console.log("Probleme de recuperation des posts : " + err);
        return throwError(err);
      })
    );
  }

  add(resource:any){
    return this.http.post(this.url,resource)
  }

  update(resource:any){
    return this.http.put(this.url+'/'+resource.id,resource);
  }

  delete(resource:number){
    return this.http.delete(this.url+'/'+resource).pipe(
      catchError((err) => {
        console.log("Probleme suppresion du post : " + err);
        return throwError(err);
      })
    )
  }
  getElementById(id: string){
    return this.http.get(this.url + "/" + id).pipe(
      catchError((err : HttpErrorResponse) => {
        console.log("Probleme de recuperation des posts : " + err);
        return throwError(err);
      })
    );
  }
}
