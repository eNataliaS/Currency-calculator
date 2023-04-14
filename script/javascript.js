let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let currencyEuro = 4.67;
let currencyDolar = 4.27;
let currencyFunt = 5.3;
let currencyKorona = 0.4;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;
  let result;

  switch (currency) {
    case "EUR":
      result = amount / currencyEuro;
      break;
    case "USD":
      result = amount / currencyDolar;
      break;
    case "GBP":
      result = amount / currencyFunt;
      break;
    case "SEK":
      result = amount / currencyKorona;
      break;
  }
  resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(
    2
  )} ${currency}`;
});
