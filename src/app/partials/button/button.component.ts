import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonName: string;
  @Input() color: string;
  @Input() radius: string;
  @Input() size: string;
  @Input() padding: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
