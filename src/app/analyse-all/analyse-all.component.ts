import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Repayment } from '../Repayment';

@Component({
  selector: 'app-analyse-all',
  templateUrl: './analyse-all.component.html',
  styleUrls: ['./analyse-all.component.css']
})
export class AnalyseAllComponent implements OnInit {

  @Input() dataInterest: Repayment;
  @Input() dataPrincipal: Repayment;
  barOption: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildBarOption();
  }

  private buildBarOption() {

    let monthIndex = [];
    for (let i = 1; i <= this.dataPrincipal.principals.length; i++) {
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
        data: ['FI-Principal', 'FI-Interest', 'FI-Amount', 'RI-Principal', 'RI-Interest', 'RI-Amount']
      },
      toolbox: {
        // y: 'bottom',
        feature: {
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
        position: 'top'
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
          name: 'FI-Principal',
          type: 'bar',
          stack: 'interest',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataInterest.principals
        },
        {
          name: 'FI-Interest',
          type: 'bar',
          stack: 'interest',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataInterest.interests
        },
        {
          name: 'FI-Amount',
          type: 'bar',
          stack: 'interestAll',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataInterest.totals
        },
        {
          name: 'RI-Principal',
          type: 'bar',
          stack: 'principal',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataPrincipal.principals
        },
        {
          name: 'RI-Interest',
          type: 'bar',
          stack: 'principal',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataPrincipal.interests
        },
        {
          name: 'RI-Amount',
          type: 'bar',
          stack: 'principalAll',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataPrincipal.totals
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      },
      dataZoom: {
        show: true,
        realtime: true,
        type: 'slider',
        xAxisIndex: 0
      }
    };
  }
}
