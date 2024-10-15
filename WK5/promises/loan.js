let creditLimit = -10;

const loanOut = amount => {
  return new Promise((resolve, reject) => {

    if (creditLimit <= 0) {
      reject("Insufficient funds");
    }

    if (amount < creditLimit) {
      creditLimit = creditLimit - amount;
      resolve(amount);
    }

    if (amount > creditLimit) {
      resolve(creditLimit);
      creditLimit = 0;
    }
  });

};

loanOut(150)
  .then((amountReceived) => {
    console.log(`Amount received: ${amountReceived}. Remaining credit limit: ${creditLimit}`);
  })
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });