import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http: HttpClient){ }

  createEnquiry(obj : any){
    return this.http.post("https://localhost:7027/api/EnquiryMaster/CreateNewEnquiry", obj)
  }

  getStatus(){
    return this.http.get("https://localhost:7027/api/EnquiryMaster/GetAllStatus")
  }

  getTypes(){
    return this.http.get("https://localhost:7027/api/EnquiryMaster/GetAllTypes")
  }

  getEnquiries(){
    return this.http.get("https://localhost:7027/api/EnquiryMaster/GetAllEnquiry")
  }

  getSingleEnquiry(id: number){
    return this.http.get("https://localhost:7027/api/EnquiryMaster/GetEnquiryById?id=" + id)
  }

  updateEnquiry(obj:any){
    return this.http.put("https://localhost:7027/api/EnquiryMaster/UpdateEnquiry", obj)
  }

  deleteEnquiry(id: number){
    return this.http.delete("https://localhost:7027/api/EnquiryMaster/DeleteEnquiryById?id=" + id)
  }
}
