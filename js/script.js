{
  const calculateResult = (currency, amount) => {
    const currencyEuro = 4.67;
    const currencyDolar = 4.27;
    const currencyFunt = 5.3;
    const currencyKorona = 0.4;

    switch (currency) {
      case "EUR":
        return amount / currencyEuro;

      case "USD":
        return amount / currencyDolar;

      case "GBP":
        return amount / currencyFunt;

      case "SEK":
        return amount / currencyKorona;
    }
  };

  const updateCurrencyText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(currency, amount);

    updateCurrencyText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
