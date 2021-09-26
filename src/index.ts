class BankAccount {
    balance: number;
    
    constructor(balance: number) {
        this.balance = balance
    }

    withdraw(amount: number) {
        if (amount <= this.balance) this.balance -= amount
    }

    deposit(amount: number) {
        if (amount > 0) this.balance += amount 
    }
}

class SavingAccount extends BankAccount {
    static interestRate = 3.5;
    debitCard: number;

    constructor(balance: number, debitCard: number) {
        super(balance)
        this.debitCard = debitCard
    }

    getInterest() {
        return this.balance * SavingAccount.interestRate
    }
}

class FixedAccount extends BankAccount {
    static interestRate = 5;

    constructor(balance: number) {
        super(balance)
    }

    getInterest() {
        if (this.balance < 10_000) return this.balance
        return this.balance * SavingAccount.interestRate
    }
}

const myAccount1 = new SavingAccount(1000, 1231523)
myAccount1.deposit(100)
console.log(myAccount1.balance)