const BankAcc = require('../features/bank_app');

describe("bankStatement", () => {

    it('returns an empty bank statement history', () => {
        const account = new BankAcc();
        expect(account.bankStatement()).toEqual([]);
     });

    it("returns a statement including a singular transaction", () =>{
        const account = new BankAcc();
        const date = new Date(Date.now());
        account.deposit(500);
        expect(account.bankStatement()).toEqual([
            {date: date, credit: null, debit: 500, balance: 500 }
        ])
        
    })

    it("returns a bank statement which includes a total of 3 transactions", () =>{
        const account = new BankAcc();
        const date = new Date(Date.now());
        account.deposit(500);
        account.withdraw(100);
        account.withdraw(100);
        expect(account.bankStatement()).toEqual([
            {date: date, credit: null, debit: 500, balance: 500 },
            {date: date, credit: 100, debit: null, balance: 400 },
            {date: date, credit: 100, debit: null, balance: 300 },
        ]);
    });

 });


