function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    if (array.length !== 0);
    {
      total = total + array[i];
    }
  }

  return total;
}
console.log(reduceArray([1, 2, 3]));
// let arrr = [];
// console.log(arrr);

// ----------------------------------------
// let total = 0;
// do {
//   let input = prompt(`Введи число`);
//   if (input === null) {
//     console.log(`Відмінено користувачем`);
//     break;
//   }
//   input = Number(input);
//   const notANumber = Number.isNaN(input);
//   if (notANumber) {
//     console.log(`Введено не число, пропускаємо даний крок циклу`);
//     continue;
//   }
//   total += input;
// } while (true);
// console.log(`загальна сума ${total}`);
// ----------------------------------------------------
