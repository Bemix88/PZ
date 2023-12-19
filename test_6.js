console.log("#6");

let total = 0;

while (true) {
    let userInput = prompt('Введіть число:');

    if (userInput === null) {
        break; 
    }

    let number = parseFloat(userInput);
    if (!isNaN(number)) {
        total += number;
    }
    else {
        alert('Будь ласка, введіть коректне число.');
    }
}

alert(`Загальна сума чисел дорівнює ${total}`);