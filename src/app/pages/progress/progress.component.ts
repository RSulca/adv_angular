import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  p1 = 20;
  p2 = 30;

  constructor() { }

  ngOnInit(): void {
  }

  update(n:number){
    this.p1 = n
  }


}
