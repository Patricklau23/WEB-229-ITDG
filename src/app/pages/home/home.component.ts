import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    //extends the route attribute from BasePage Component  
  super(route);
  }
  
  // ngOnInit(): void {
   
  // }

}
