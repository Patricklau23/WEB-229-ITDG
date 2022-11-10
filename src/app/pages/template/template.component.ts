import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent extends BasePageComponent implements OnInit {

  constructor(route:ActivatedRoute) {
    super(route)
   }

  // ngOnInit(): void {
  // }

}
