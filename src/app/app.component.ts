import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CalculateService } from './calculate.service'
import { Formula } from './Formula';
import { Repayment } from './Repayment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LoanRepayment';

  money: number;
  year: number;
  rate: number;

  equalityPrincipal: Repayment;
  equalityInterest: Repayment;

  formulaDefinition = [
    new Formula("贷款总额", "<div>$P$</div>"),
    new Formula("还款年限", "<div>$N$</div>"),
    new Formula("还款期数", "<div>$n = N \\times 12$</div>"),
    new Formula("年利率", "<div>$R$</div>"),
    new Formula("月利率", "<div>$r = \\cfrac{R}{12}$</div>")];

  formulaPrincipal = [
    new Formula("第i月还总额", "<div>$\\cfrac{P}{n} + (P - \\cfrac{P \\times (i - 1)}{n}) \\times r$</div>"),
    new Formula("第i月还本金", "<div>$\\cfrac{P}{n}$</div>"),
    new Formula("第i月还利息", "<div>$(P - \\cfrac{P \\times (i - 1)}{n}) \\times r$</div>"),
    new Formula("还款总利息", "<div>$\\cfrac{(n + 1) \\times P \\times r}{2}$</div>"),
    new Formula("还款总额", "<div>$\\cfrac{(n + 1) \\times P \\times r}{2} + P$</div>")];

  formulaInterest = [
    new Formula("第i月还总额(PM)", "<div>$\\cfrac{P \\times r \\times (1 + r) ^ n }{(1 + r) ^ n - 1}$</div>"),
    new Formula("第i月还本金", "<div>$(PM - P \\times r) \\times (1 + r) ^ i$</div>"),
    new Formula("第i月还利息", "<div>$PM - (PM - P \\times r) \\times (1 + r) ^ i$</div>"),
    new Formula("还款总利息", "<div>$\\cfrac{n \\times P \\times r \\times (1 + r) ^ n}{(1 + r) ^ n - 1} - P$</div>"),
    new Formula("还款总额", "<div>$\\cfrac{n \\times P \\times r \\times (1 + r) ^ n}{(1 + r) ^ n - 1}$</div>")];

  constructor(private primengConfig: PrimeNGConfig, private calculateService: CalculateService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.year = 5;
    this.money = 100000;
    this.rate = 1.45;
  }

  calculate() {
    this.equalityPrincipal = this.calculateService.calculateEqualityPrincipal(this.money, this.year, this.rate);
    this.equalityInterest = this.calculateService.calculateEqualityInterest(this.money, this.year, this.rate);
    
    let bot = document.getElementById('next');
    if (bot !== null) {
      bot.scrollIntoView();
      bot = null;}
  }
}