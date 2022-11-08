import { Component, OnInit } from '@angular/core';
//Allow us to connect to current route e.g,home page
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  title: string;
  //to use this route, each page need to extend this attribute 
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute) 
  { 
    this.route = route;
  }

  ngOnInit(): void {
    //The title is equal to particular activated route title - data package - go to app-routing modules
    this.title = this.route.snapshot.data.title;
  }

}
