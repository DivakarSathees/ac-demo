import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAppointmentService {

  constructor(private http:HttpClient) { }

  readonly baseURL ='https://8080-dffafdafebcfacbdcbaeaeaebbbabcf.project.examly.io/api/Appointment';

  AddAppointment(Obj:any){
    return this.http.post<any>(this.baseURL,Obj);
   }

 
}
