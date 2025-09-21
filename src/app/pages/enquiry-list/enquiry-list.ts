import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../service/master';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-enquiry-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css'
})
export class EnquiryList {
  masterSrc = inject(Master);

  enquiryList: any[] = [];

  ngOnInit(): void{
    this.masterSrc.getEnquiries().subscribe((res:any) =>{
      this.enquiryList = res;
    })
  }
}
