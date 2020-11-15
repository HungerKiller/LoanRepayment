import { PropertyWrite } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Repayment } from './Repayment';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  //等额本金
  calculateEqualityPrincipal(money: number, year: number, rate: number): Repayment {
    let monthRate = rate / 100 / 12;
    let monthNumber = year * 12;
    // calculate month principal
    let monthPrincipal = this.roundNumber(money / monthNumber);
    // calculate month interest and month total
    let principals: any[] = new Array(monthNumber);
    let interests: any[] = new Array(monthNumber);
    let totals: any[] = new Array(monthNumber);
    for (let index = 0; index < monthNumber; index++) {
      interests[index] = this.roundNumber((money - monthPrincipal * index) * monthRate);
      principals[index] = monthPrincipal;
      totals[index] = this.roundNumber(interests[index] + principals[index]);
    }
    let sumInterest = interests.reduce((sum, interest) => sum + interest, 0);

    return new Repayment(money, sumInterest, money + sumInterest, principals, interests, totals);
  }

  //等额本息
  calculateEqualityInterest(money: number, year: number, rate: number): Repayment {
    let monthRate = rate / 100 / 12;
    let monthNumber = year * 12;
    // calculate month total
    let monthTotal = money * monthRate * Math.pow(1 + monthRate, monthNumber) / (Math.pow(1 + monthRate, monthNumber) - 1);
    monthTotal = this.roundNumber(monthTotal);
    // calculate month principal and month interest
    let principals: any[] = new Array(monthNumber);
    let interests: any[] = new Array(monthNumber);
    let totals: any[] = new Array(monthNumber);
    for (let index = 0; index < monthNumber; index++) {
      interests[index] = this.roundNumber((money * monthRate - monthTotal) * Math.pow(1 + monthRate, index) + monthTotal);
      principals[index] = this.roundNumber(monthTotal - interests[index]);
      totals[index] = monthTotal;
    }
    let sumInterest = interests.reduce((sum, interest) => sum + interest, 0);

    return new Repayment(money, sumInterest, money + sumInterest, principals, interests, totals);
  }

  roundNumber(num: number)
  {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }
}
