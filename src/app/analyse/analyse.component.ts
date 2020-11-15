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
      monthIndex.push(`第${i}月`);
    }

    this.barOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['本金', '利息']
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
          name: '本金',
          type: 'bar',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.data.principals
        },
        {
          name: '利息',
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
