console.log("#4");

let credits = 23580;
const pricePerDroid = 3000;


let drones = prompt('Яку кiлькiсть дронiв ви хочите купити:');

if (drones === null) {
    console.log('Скасовано користувачем!');
}
else {

    drones = Number(drones);
    const totalPrice = drones * pricePerDroid;

    if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
    }
    else {
        credits = credits - totalPrice;
        console.log('Ви купили', drones, 'дроїдів, на рахунку залишилося', credits, 'кредитів.');
    }
}

