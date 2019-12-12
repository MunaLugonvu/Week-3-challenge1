const BankAccount = require('./account')

test('returns Your Account is now open! if state is Opened', () =>{
    expect(BankAccount.openAccount()).toBe('Account Opened');

});

test ('returns balance',() => {
    expect(BankAccount.checkBalance()).toBe(500000);
});

test('returns balance after withdraw', () => {
     expect(BankAccount.withdraw(100000)).toBe(400000);
});
