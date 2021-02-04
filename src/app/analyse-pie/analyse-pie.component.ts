import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Repayment } from '../Repayment';

@Component({
  selector: 'app-analyse-pie',
  templateUrl: './analyse-pie.component.html',
  styleUrls: ['./analyse-pie.component.css']
})
export class AnalysePieComponent implements OnInit {

  @Input() data: Repayment;
  pieOption: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildPieOption();
  }

  private buildPieOption() {
    this.pieOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        // orient: 'vertical',
        // left: 10,
        data: ['Principal', 'Interest']
      },
      series: [
        {
          name: 'Repayment',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: this.data.sumPrincipal, name: 'Principal' },
            { value: this.data.sumInterest, name: 'Interest' }
          ]
        }
      ]
    };
  }
}
