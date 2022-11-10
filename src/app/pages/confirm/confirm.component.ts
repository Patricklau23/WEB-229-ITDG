import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent extends BasePageComponent implements OnInit {
  
  constructor(route: ActivatedRoute) {

    super(route)
   }
  // ngOnInit(): void {
  
  // }

}
