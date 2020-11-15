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
        data: ['本金', '利息']
      },
      series: [
        {
          name: '还款',
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
            { value: this.data.sumPrincipal, name: '本金' },
            { value: this.data.sumInterest, name: '利息' }
          ]
        }
      ]
    };
  }
}
