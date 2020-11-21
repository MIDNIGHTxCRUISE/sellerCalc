'use strict';

// Input Variables
let inputPrice = document.querySelector('.platForm1');
let goatFee = 0;
let stockXFee = 0;

// IMG Variables
const imageHeader = document.querySelector('.allPlatforms');
let imageSRC = ['goatFlightPic.jpg', 'stockX.png'];

// Output Variables
let goatProfit = document.querySelector('.goatOutPut');
let flightProfit = document.querySelector('.flightOutPut');
let stockxProfit = document.querySelector('.stockxOutPut');

// Picture Interval Function
let i = 0;
setInterval(function () {
  imageHeader.style.backgroundImage = 'url(' + imageSRC[i] + ')';
  i = i + 1;
  if (i == imageSRC.length) {
    i = 0;
  }
}, 1000);

// SellerFee Calc Functions
const goatFlightCalc = sellPrice => sellPrice * 0.124 + 5.0;
const stockXCalc = sellPrice => sellPrice * 0.115;
const goatFlightFunc = function (func) {
  if (parseInt(inputPrice.value) > 0) {
    document.querySelector('.upwardOrDown').innerHTML = `📈 `;

    goatFee = goatFlightCalc(parseInt(inputPrice.value));
    const goatSalePrice = parseInt(inputPrice.value) - goatFee;
    goatProfit.innerHTML = `🐐$${goatSalePrice}`;

    stockXFee = stockXCalc(parseInt(inputPrice.value));
    const stockSalePrice = parseInt(inputPrice.value) - stockXFee;
    stockxProfit.innerHTML = `🧱 $${stockSalePrice}`;
  } else {
    document.querySelector('.upwardOrDown').innerHTML = `📉 `;
    goatProfit.innerHTML = `$0.00`;
    stockxProfit.innerHTML = `$0.00`;
    alert(`Can't Sell something for $0.00....`);
  }
};

// Event
window.addEventListener('keydown', function (ev) {
  if (ev.key === 'Enter') {
    ev.preventDefault();
    goatFlightFunc(goatFlightCalc());
  } else {
    console.log('You did not press enter');
  }
});
