import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

//form for routing 
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})

export class SurveyListComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) 
  { 
    
     //extends the route attribute from BasePage Component  
    super(route);
  }

  // ngOnInit(): void {
  // }
}
