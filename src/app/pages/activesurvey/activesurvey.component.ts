import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ApiService} from '../../shared/api.service';
import { SurveyModel } from './activesurvey.model';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-activesurvey',
  templateUrl: './activesurvey.component.html',
  styleUrls: ['./activesurvey.component.css']
})
export class ActivesurveyComponent implements OnInit {

  formValue !: FormGroup;
  surveyModelObj: SurveyModel = new SurveyModel();
  surveyData !: any;
  constructor(private formbuilder: FormBuilder,   private api : ApiService,  private router: Router)
  {

  } 

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
    question : [''],
    answer:['']
    })
    this.getAllSurvey();
   }

   //post function - for posting data to json database
   postSurveyDetails(){
    this.surveyModelObj.question = this.formValue.value.question;

    this.api.postSurvey(this.surveyModelObj).subscribe(res=>{
      console.log(res);
      alert("Survey Added Successfully")
      //close button 
      let ref = document.getElementById('close')
      ref?.click();
      //reset the form
      this.formValue.reset();
      //once the data is post, run this function to get the data to show on table instantly 
      this.getAllSurvey();
      
     
  
    },
    err=>{
      alert("Something Went wrong")
    })

   }

   //get function - for getting data from json database to show on html table 
   getAllSurvey(){
    this.api.getSurvey()
    .subscribe(res=>{
      this.surveyData = res;
    })
   }

   //delete function - for deleting data
   deleteAllSurvey(row:any){
    this.api.deleteSurvey(row.id)
    .subscribe(res=>{
      alert("Survey Deleted")
      //Get the most updated data on json once click delete btn 
      this.getAllSurvey();
    })
   }
   //Cancel and redirect to home
   CancelBtn():void{
    this.router.navigateByUrl('/home');
   }

}

  
  
