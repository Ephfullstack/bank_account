class BankAcc {
    constructor() {
        this.balance = 0;
        this.history = [];
    }

    
  bankStatement() {
    return this.history;
  }


  deposit(amount) {
        this.balance += amount;
        this.history.push({
            date: new Date(Date.now()),
            credit: null, 
            debit: amount,
            balance: this.balance,
        });
    }

    withdraw(amount) {
        this.balance -= amount;
        this.history.push({
            date: new Date(Date.now()),
            credit: amount,
            debit: null,
            balance: this.balance,

        });
    }

}

module.exports = BankAcc; 


const account = new BankAcc();
const date = new Date(Date.now());
account.deposit(500);
account.withdraw(100);
account.withdraw(100);
console.log(account.bankStatement())