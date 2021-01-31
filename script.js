'use strict';

// Input Variables
let inputPrice = document.querySelector('.platForm1');
let goatFee = 0;
let stockXFee = 0;

// HTML Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const gridContainer = document.querySelector('.grid-container');
const trend = document.querySelector('.upwardOrDown');

// IMG
const imageHeader = document.querySelector('.allPlatforms');
let imageSRC = ['goatFlightPic.jpg', 'stockX.png'];

// Output
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
const goatFlightCalc = sellPrice => sellPrice * 0.124 - 5.0;
const stockXCalc = sellPrice => sellPrice * 0.115;
const goatFlightFunc = function (func) {
  if (parseInt(inputPrice.value) > 0) {
    closeModal();
    trend.innerHTML = `📈 `;

    goatFee = goatFlightCalc(parseInt(inputPrice.value));
    const goatSalePrice = parseInt(inputPrice.value) - goatFee;
    goatProfit.innerHTML = `🐐$${goatSalePrice}`;

    stockXFee = stockXCalc(parseInt(inputPrice.value));
    const stockSalePrice = parseInt(inputPrice.value) - stockXFee;
    stockxProfit.innerHTML = `🧱 $${stockSalePrice}`;
  } else {
    closeModal();
    trend.innerHTML = `📉 `;
    goatProfit.innerHTML = `$0.00`;
    stockxProfit.innerHTML = `$0.00`;
    alert(`Can't Sell something for $0.00....`);
  }
};

// Modal Functions
const openModal = function () {
  modal.classList.remove('hidden');
  gridContainer.style.marginTop = '350px';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  gridContainer.style.marginTop = '0px';
};

// Event #1
window.addEventListener('keydown', function (ev) {
  if (ev.key === 'Enter') {
    ev.preventDefault();
    goatFlightFunc(goatFlightCalc());
  } else {
    console.log('You did not press enter');
  }
});

// Event #2
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Event #3
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
