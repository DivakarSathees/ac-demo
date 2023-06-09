import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  readonly baseURL ='https://8080-dffafdafebcfacbdcbaeaeaebbbabcf.project.examly.io/api/isUserPresent';
  readonly baseURL1 ='https://8080-dffafdafebcfacbdcbaeaeaebbbabcf.project.examly.io/api/isAdminPresent';

  isLoggedInToken:any;
  login(Obj:any){
    if(Obj.email == "admin@example.com"){
      return this.http.post(this.baseURL1,Obj);
    }
    return this.http.post(this.baseURL,Obj);
   }
  // responsedata: any;
  // login(Obj: any) {
  //    this.http.post(this.baseURL, Obj).pipe(
  //     switchMap((response: any) => {

  //       console.log(response.statusCode);
  //       if (response.statusCode === 404) {
  //         return this.http.post(this.baseURL1, Obj).pipe(
  //           catchError((error: any) => {
  //             console.log(error);
  //             return throwError(error);
  //           })
  //         );
  //       } else {
  //         return of(response);
  //       }
  //     }),
  //     catchError((error: any) => {
  //       console.log(error);
  //       return throwError(error);
  //     })
  //   );
  // }

   uid:any;
   set(id:any){
    this.uid=id;
     
   }
   get(){
     return this.uid;
   }


}
