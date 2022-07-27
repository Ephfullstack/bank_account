### **Requirements**

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### **Acceptance criteria**

**Given** a client makes a deposit of 1000 on 10-01-2023

**And** a deposit of 2000 on 13-01-2023

**And** a withdrawal of 500 on 14-01-2023

**When** she prints her bank statement

**Then** she would see

`date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00`

## user story’s

- [ ]  as a user i want to be able to see my bank account balance.
- [ ]  as a user so that i can use my bank account i want to make deposits and view my deposits
- [ ]  as a user so that i can use a bank account i want to be able to see the date of a deposit.

## Planning

Create a program which stock piles transactions and is expressed once the user requests to view the bank statement.
# MVP 

1) Make it possible to view an empty transction history
2) Make it possible to view a transaction with a deposit expressing balance 
3) make it possible to view a transction with a credit withdrawl expressing balance
4)implement a function which expressses the date a transaction was configured 
5)implement a function which expresses the current date of a transaction

# Extra functions
6) Implements a function which implements errors in case an account goes into debt/overdraw
8) implement extra functionality and formating 

## Code Structure

this function will be carried out with the use of classes and creating objects of the classes in order to mimic a new bank account.

## Extra questions in which i may have for the employer 

- what currency would you like for this programme to be expressed in?
