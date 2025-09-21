import { Component, inject } from '@angular/core';
import { Master } from '../../service/master';
import { FormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-enquiry',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-enquiry.html',
  styleUrl: './update-enquiry.css'
})
export class UpdateEnquiry {
  updatedEnquiryObj: any = {
    enquiryId: 0,
    enquiryTypeId: 0,
    enquiryStatusId: 0,
    customerName: '',
    mobileNo: '',
    email: '',
    message: '',
    createdDate: new Date,
    resolution: '',
  };
  master = inject(Master);
  route = inject(ActivatedRoute);
  router = inject(Router);

  successMessage = '';
  errorMessage = '';

  constructor() {
    const enquiryId = Number(this.route.snapshot.paramMap.get('id'));
    if (enquiryId) {
      this.master.getSingleEnquiry(enquiryId).subscribe({
        next: (res: any) => {
          this.updatedEnquiryObj = res;
        },
        error: (err) => {
          this.errorMessage = 'Error fetching enquiry details';
        }
      });
    }
  }

  onUpdate() {
    this.master.updateEnquiry(this.updatedEnquiryObj).subscribe({
      next: (res: any) => {
        this.successMessage = 'Enquiry updated successfully!';
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while updating enquiry.';
        this.successMessage = '';
      }
    });
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      this.master.deleteEnquiry(this.updatedEnquiryObj.enquiryId).subscribe({
        next: () => {
          alert('Enquiry deleted successfully!');
          this.router.navigate(['/list']);
        },
        error: () => {
          alert('Error deleting enquiry');
        }
      });
    }
  }

  onReset() {
    this.constructor(); // reload data
  }
}
