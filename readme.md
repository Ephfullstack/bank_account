# Bank Application  

This is a Makers Mock Bank application created to mimic a bank ATM

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
## Setting up the Application


## Running the Program

This Program runs within the REPL(NODE).

````node
node 
const BankAcc = require('../features/bank_app');
const account = new BankAcc();
const date = new Date(Date.now());
account.deposit(500);
account.withdraw(100);
account.withdraw(100);
console.log(account.bankStatement())
````

## Planning/Road Map

# Phase 1

Set up a bank account class which can be used as a template for a bank account object. this object can hold the functionality of being able to withdraw(credit) and deposit(debit) while expressing the date of the transaction and the total balance.




# phase 2

extra functionality such as currency depending on whaat country the bank application is ran at as well as an overdraft system depending if the user has that option. Formating of the orignal function to express the program within a table view as expressed within the Acceptance Criteri.

# phase 3

A fullstack web application with the implemntation of HTMl and CSS, where the program can be run from a server.



## Questions for the Employer?

- what currency would you like for this programme to be expressed in?

once this is understood i could implement a function which once added the user could add there country and it will represent the blaance in the countrys currency.

- what happens when the user is in overdraft?

would you like an overdraft function or would you just like for there to be an error stating that the user has insufficient funds.





