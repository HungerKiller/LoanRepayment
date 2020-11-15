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
        data: ['等额本息-本金', '等额本息-利息', '等额本息-总额', '等额本金-本金', '等额本金-利息', '等额本金-总额']
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
          name: '等额本息-本金',
          type: 'bar',
          stack: 'interest',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataInterest.principals
        },
        {
          name: '等额本息-利息',
          type: 'bar',
          stack: 'interest',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataInterest.interests
        },
        {
          name: '等额本息-总额',
          type: 'bar',
          stack: 'interestAll',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataInterest.totals
        },
        {
          name: '等额本金-本金',
          type: 'bar',
          stack: 'principal',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataPrincipal.principals
        },
        {
          name: '等额本金-利息',
          type: 'bar',
          stack: 'principal',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: this.dataPrincipal.interests
        },
        {
          name: '等额本金-总额',
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
