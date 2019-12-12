class BankAccount {


    constructor(state, bal, AccountName) {
        //your code here
        this.state = state;
        this.bal = bal;
        this.AccountName = AccountName;
    }

    checkBalance() {
        //your code here
        if (this.state == "Opened") {
            console.log("Your balance is " + this.bal);
            return this.bal;
        } else {
            return 'This account is either closed or doesnot exist';
        }

    }

    openAccount() {
        //your code here
        if (this.state == null) {
            this.state = "Opened";
            console.log("Your Account is now open!");
            return "Account Opened"
        } else {
            return "Account already exists";
        }


    }

    deposit(depositAmount) {
        //your code here
        if (typeof depositAmount !== "number") {
            return 'Please enter a valid amount';
        } else {
            if (this.state !== "Opened") {
                return "Invalid Account";
            } else {
                this.bal = this.bal + depositAmount;
                console.log('You have deposited' + depositAmount + "Your balance is" + this.bal);
                return this.bal;
            }
        }
    }

    withdraw(withdrawAmount) {
        //Your Code here
        if (this.state == "Opened") {
            if (this.bal < withdrawAmount) {
                console.log('Your Account Balance is Insufficient!')
                return "Your Account Balance Is Insufficient!";
            } else if (this.bal > withdrawAmount) {
                this.bal = this.bal - withdrawAmount;
                console.log('You have withdrawn' + withdrawAmount + 'Your new  balance is' + this.bal);
                return this.bal;
            } else {
                this.bal = this.bal - withdrawAmount;
                console.log('All your money has been withdrawn! Your account balance is' + this.bal);
                return this.bal;
            }
        } else {
            console.log('Withdraw can not be made, Account is closed');
            return this.state;
        }
    }

    closeAccount() {
        this.state = "Closed"
        console.log('Your Account has been Closed!');
        return 'Account has Been Closed!'
    }
}

module.exports = new BankAccount(null, 500000, "Muna Lugonvu");
console.log(new BankAccount (null, 500000, "Muna Lugonvu"))

