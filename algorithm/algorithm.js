const arr = [2, 5, 7, 8, 2, 6, 9];

const min = Math.min(...arr);
const max = Math.max(...arr);
const sum = arr.reduce((acc, curr) => acc + curr, 0);

const minimum = sum - max;
const maximum = sum - min;

console.log("Minimum value:", minimum);
console.log("Maximum value:", maximum);
