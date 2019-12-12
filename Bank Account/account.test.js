const BankAccount = require('./account')

test('returns Your Account is now open! if state is Opened', () =>{
    expect(BankAccount.openAccount()).toBe('Account Opened');

});

test ('returns balance if your account is open',() => {
    expect(BankAccount.checkBalance()).toBe(500000);
});

test('returns balance after deposit if account state is Opened', () => {
     expect(BankAccount.deposit(100000)).toBe(600000);
});
test('String as Amount is not Accepted', () => {
    expect( BankAccount.deposit("A hundred Thousand")).toBe("Please enter a valid amount")
})

test('returns All your money has been withdrawn', () => {
    expect(BankAccount.withdraw(600000)).toBe(0);
});

test('returns account  balance is insufficinet if amount is more than balance and account is open', () => {
    expect(BankAccount.withdraw(1500000)).toBe(" Your Account Balance Is Insufficient!");
});


test('returns your account has been closed',() => {
    expect(BankAccount.closeAccount()).toBe('Account has Been Closed!');
});

