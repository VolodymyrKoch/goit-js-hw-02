// -------до кожного елементу масиву додати +"is a pet"-------

// const logItems = function (parametr = []) {
//   for (let i = 0; i < parametr.length; i += 1) {
//     parametr[i] += "is a pet";
//   }
//   return parametr;
// };

// const get = logItems(["Mango", "Poly", "Ajax"]);

// console.log(get);
// ----------------------------------------------------------
// --------------Инструкции break и continue----------------

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // Клиент с таким именем есть в базе данных!
// --------------------------------------------------------------------------------
// --------------task2-m2----------------------------
// const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
//   return message.split(" ").length * pricePerWord;
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// ---------------------------------------------
// -----------------------task3-m2-----------------
// function findLongestWord(string = "") {
//   let word = string.split(" ");
//   let maxSize = word[0];
//   for (let i = 0; i < word.length; i += 1) {
//     if (maxSize.length < word[i].length) {
//       maxSize = word[i];
//       console.log(word[4].length);
//     }
//   }
//   return maxSize;

//   // if (string.length)
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// -------------------------task4-m2-----------------
// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let transformString = "";
//   if (string.length > maxLength) {
//   }
//   return (transformString = string.slice(0, maxLength) + "...");
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// -------------------------------------------------------------
