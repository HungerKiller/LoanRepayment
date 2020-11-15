export class Money {
    monthIndex: number;
    principal: number;
    interest: number;
    total: number;

    constructor(monthIndex: number, principal: number, interest: number, total: number) {
        this.monthIndex = monthIndex;
        this.principal = principal;
        this.interest = interest;
        this.total = total;
    }
}