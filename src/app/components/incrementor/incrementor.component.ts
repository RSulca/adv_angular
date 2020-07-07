import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styles: [
  ]
})
export class IncrementorComponent implements OnInit, AfterViewInit {

  @ViewChild('txtPer') txtPer: ElementRef;

  @Input() legend = 'Legend';
  @Input() percentage: number = 50;

  @Output() value: EventEmitter<number> = new EventEmitter();

  constructor() {
  }
  ngAfterViewInit(): void {
    console.log(this.txtPer);
  }

  ngOnInit(): void {
  }

  action(c) {
    if (c === '+' && this.percentage <= 95) {
      this.percentage += 5;
      this.value.emit(this.percentage)
    }
    if (c === '-' && this.percentage >= 5) {
      this.percentage -= 5;
      this.value.emit(this.percentage)
    }
    this.txtPer.nativeElement.value = this.percentage;

  }

}
