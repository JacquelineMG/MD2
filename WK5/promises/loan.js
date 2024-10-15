let creditLimit = 5000;

const loanOut = amount => {
  return new Promise((resolve, reject) => {
    resolve(amount);
  });

};

loanOut(150)
  .then((amountReceived) => {
    console.log(`Amount received: ${amountReceived}. Remaining credit limit: ${creditLimit}`)
  })
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });