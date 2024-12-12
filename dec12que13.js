function createBankAccount(initialBalance) {
    let balance = initialBalance; // The balance is private and can't be accessed directly
  
    return {
      deposit(amount) {
        balance += amount; // Increase the balance by the given amount
        return balance;
      },
      withdraw(amount) {
        if (amount <= balance) {
          balance -= amount; // Decrease the balance by the given amount
          return balance;
        } else {
          return "Insufficient funds"; // If not enough balance
        }
      },
      getBalance() {
        return balance; // Returns the current balance
      }
    };
  }
  
  // Example usage
  const account = createBankAccount(100);
  
  console.log(account.deposit(50)); // Output: 150
  console.log(account.withdraw(30)); // Output: 120
  console.log(account.getBalance()); // Output: 120
  