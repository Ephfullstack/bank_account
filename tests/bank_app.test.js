const BankAcc = require('../features/bank_app');

describe("bankStatement", () => {

    it('returns an empty bank statement history', () => {
        const account = new BankAcc();
        expect(account.bankStatement()).toEqual([]);
     });

    it("shows a bank statement expressing a deposit", () => {
        const account = new BankAcc();
        const date = new Date(Date.now());
        account.deposit(500);
        expect(account.bankStatement()).toEqual([
            {date: date, credit: null, debit: 500, balance: 500},
        ]);
    });

});