import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  @Input() definition: any[];
  @Input() formula: any[];

  constructor() {
  }

  ngOnInit(): void {
  }
}