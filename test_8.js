console.log("#8");

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

console.log('firstTwoEls:', firstTwoEls);
console.log('nonExtremeEls:', nonExtremeEls);
console.log('lastThreeEls:', lastThreeEls);