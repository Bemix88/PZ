console.log("#5");

let country = prompt('Введіть країну доставки:').toLowerCase(); 

let shippingCost;

switch (country) {
  case 'китай':
    shippingCost = 100;
    break;
  case 'чилі':
    shippingCost = 250;
    break;
  case 'австралія':
    shippingCost = 170;
    break;
  case 'індія':
    shippingCost = 80;
    break;
  case 'ямайка':
    shippingCost = 120;
    break;
  default:
    alert('У вашій країні доставка недоступна');
}

if (shippingCost !== undefined) {
  console.log(`Доставка в ${country} буде коштувати ${shippingCost} кредитів.`);
}