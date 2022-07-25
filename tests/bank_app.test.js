const BankAcc = require('../features/bank_app');

describe("bankStatement", () => {

    it('returns an empty bank statement history', () => {
        const account = new BankAcc();
        expect(account.bankStatement()).toEqual([]);
     });

});