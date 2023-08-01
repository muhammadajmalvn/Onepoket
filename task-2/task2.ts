//  function that takes an array of integers as input and returns the sum of all the numbers
function sumOfArray(arr: number[]): Number {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
const array: number[] = [10, 5, 4, 12, 50];
const result: Number = sumOfArray(array);
console.log(result);

export {};
