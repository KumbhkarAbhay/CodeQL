import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 
  contactForm: FormGroup;
  submitted = false;
  showData = false;
 
  constructor(private formBuilder: FormBuilder,
     private SharedService: SharedService,
     private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
 
  onSubmit() {
    this.submitted = true;
    const fromData = this.contactForm.value;
    this.SharedService.setcontactData(fromData);
    this.router.navigate([("home")]);
    console.log("fromData", fromData);
  }
}