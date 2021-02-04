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
    new Formula("Loan amount", "<div>$P$</div>"),
    new Formula("Loan period (year)", "<div>$N$</div>"),
    new Formula("Total number of instalments", "<div>$n = N \\times 12$</div>"),
    new Formula("Annual interest rate", "<div>$R$</div>"),
    new Formula("Monthly interest rate", "<div>$r = \\cfrac{R}{12}$</div>")];

  formulaPrincipal = [
    new Formula("Amount of repayment of month i", "<div>$\\cfrac{P}{n} + (P - \\cfrac{P \\times (i - 1)}{n}) \\times r$</div>"),
    new Formula("Principal of repayment of month i", "<div>$\\cfrac{P}{n}$</div>"),
    new Formula("Interest of repayment of month i", "<div>$(P - \\cfrac{P \\times (i - 1)}{n}) \\times r$</div>"),
    new Formula("Total interest on repayment", "<div>$\\cfrac{(n + 1) \\times P \\times r}{2}$</div>"),
    new Formula("Total repayment amount", "<div>$\\cfrac{(n + 1) \\times P \\times r}{2} + P$</div>")];

  formulaInterest = [
    new Formula("Amount of repayment of month i (note: PM)", "<div>$\\cfrac{P \\times r \\times (1 + r) ^ n }{(1 + r) ^ n - 1}$</div>"),
    new Formula("Principal of repayment of month i", "<div>$(PM - P \\times r) \\times (1 + r) ^ i$</div>"),
    new Formula("Interest of repayment of month i", "<div>$PM - (PM - P \\times r) \\times (1 + r) ^ i$</div>"),
    new Formula("Total interest on repayment", "<div>$\\cfrac{n \\times P \\times r \\times (1 + r) ^ n}{(1 + r) ^ n - 1} - P$</div>"),
    new Formula("Total repayment amount", "<div>$\\cfrac{n \\times P \\times r \\times (1 + r) ^ n}{(1 + r) ^ n - 1}$</div>")];

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