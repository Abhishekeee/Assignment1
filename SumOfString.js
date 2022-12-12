const sumofString = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80";
const arrayOfNumbers = sumofString.replace(/\D*/g, "").split("")

let sum = 0;
arrayOfNumbers.forEach((number) => {
  sum += Number(number);
});

console.log(sum);
