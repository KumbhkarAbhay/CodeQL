import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name:string = 'uday';
  age: number = 40;
  month:any ;
  names:string[]=["abhay","raju","hello"];
  empcode:number[]=[1,2,3,4,5,6];
  employees:any[] = [1,"two", true, {name:"Pankaj"}];
  isActive:boolean = true;
  TestFunction(){
    enum Department {
      Development ,
      Sales,
      Hr
    }
     let selectedDepartment:Department=Department.Sales;
}

   contactData: any;

   constructor(private SharedService: SharedService ){
     
     this.SharedService.castData.subscribe((data) => {
       this.contactData=data;
      });
      console.log(this.contactData)  
   }
   
}
