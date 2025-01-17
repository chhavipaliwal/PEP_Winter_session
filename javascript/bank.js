// simulate const and let for a banking aplication by declaring the folowing functions to
// 1) createAccount ()----to create anaccount
// 2) Withdraw() ---to withdraw amount
// 3)deposit--to deposit amount
// Create a new account
{
  function createAccount(accountName, initialDeposit) {
    const account = {
      name: accountName,
      balance: initialDeposit,
    };
    console.log(
      `Account created for ${accountName} with an initial deposit of $${initialDeposit}`
    );
    return account;
  }

  // Withdraw amount from an account
  function withdraw(account, amount) {
    if (amount <= 0) {
      console.log("Amount to withdraw must be greater than 0.");
      return;
    }

    if (account.balance >= amount) {
      account.balance -= amount;
      console.log(`$${amount} withdrawn. New balance is $${account.balance}.`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  // Deposit amount into an account
  function deposit(account, amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than 0.");
      return;
    }

    account.balance += amount;
    console.log(`$${amount} deposited. New balance is $${account.balance}.`);
  }

  // Simulating a banking operation
  const myAccount = createAccount("John Doe", 200); // Create account with initial deposit of 500

  deposit(myAccount, 200); // Deposit $200
  withdraw(myAccount, 0); // Withdraw $0
  withdraw(myAccount, 100); // Withdraw $100
  withdraw(myAccount, 700); // Attempt to withdraw more than available balance
  deposit(myAccount, -50); // Attempt to deposit a negative amount
}
{
  function createAccount() {
    const account = {
      name: "John Doe",
      balance: 200,
    };
    console.log("account created for john doe with an initial deposit of $200");
    return account;
  }
  function withdraw(account, amount) {
    if (amount <= 0) {
      console.log("Amount to withdraw must be greater than 0.");
      return;
    }
    if (account.balance >= amount) {
      account.balance -= amount;
      console.log(`$${amount} withdrawn. New balance is $${account.balance}.`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  function deposit(account, amount) {
    if (amount <= 0) {
      console.log("Amount to be deposit must be greater than 0.");
      return;
    }
    account.balance += amount;
    console.log(`$${amount} deposit. New balance is $${account.balance}.`);
  }
  withdraw(createAccount(), 0);
  deposit(createAccount(), 200);
  withdraw(createAccount(), 100);
  withdraw(createAccount(), 700);
  deposit(createAccount(), -50);
}
