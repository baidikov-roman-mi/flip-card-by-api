let url = "./credit_cards.json";
let result = responseCheck();
let logoTxt = document.querySelector(".logo-txt");
let cardNumber = document.querySelector(".card-number");
let cardNumberBack = document.querySelector(".card-number-back");
let cardholderName = document.querySelector(".cardholder-name");
let date = document.querySelector(".date");
let cvv = document.querySelector(".cvv");
async function responseCheck() {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    return data;
  }
}

result.then(
  (result) => {
    console.log(result);
    logoTxt.innerHTML = result.type;
    cardNumber.innerHTML = result.credit_card_number;
    cardNumberBack.innerHTML = result.credit_card_number;
    date.innerHTML = result.credit_card_expiry_date;
    cardholderName.innerHTML = result.cardholder_name;
    cvv.innerHTML = result.CVV;
  }, // 2
  (reject) => {
    console.log(errorMessage);
  } // 3
);
