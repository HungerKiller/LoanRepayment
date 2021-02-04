import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Repayment } from '../Repayment';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

  @Input() data: Repayment;
  barOption: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildBarOption();
  }

  private buildBarOption() {
    let monthIndex = [];
    for (let i = 1; i <= this.data.principals.length; i++) {
      monthIndex.push(`${i}th Month`);
    }

    this.barOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['Principal', 'Interest']
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          },
          dataView: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: 'value',
        position: 'top',
        axisLabel: { formatter: '{value} €' }
      },
      xAxis: {
        type: 'category',
        data: monthIndex,
        axisLabel: {
          rotate: 45
        }
      },
      series: [
        {
          name: 'Principal',
          type: 'bar',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.data.principals
        },
        {
          name: 'Interest',
          type: 'bar',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.data.interests
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }
}
