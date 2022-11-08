import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) 
  {
     //extends the route attribute from BasePage Component  
    super(route);
   }
  
  // ngOnInit(): void {
  // }

}
