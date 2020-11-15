export class Repayment {
    sumPrincipal: number;
    sumInterest: number;
    sumTotal: number;
    principals: number[];
    interests: number[];
    totals: number[];

    constructor(sumPrincipal: number, sumInterest: number, sumTotal: number, principals: number[], interests: number[], totals: number[]) {
        this.sumPrincipal = sumPrincipal;
        this.sumInterest = sumInterest;
        this.sumTotal = sumTotal;
        this.principals = principals;
        this.interests = interests;
        this.totals = totals;
    }
}