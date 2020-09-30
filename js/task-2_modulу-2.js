const calculateEngravingPrice = (message, pricePerWord) => {
  return message.split(" ").length * pricePerWord;
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    9
  )
);
// -----------------------------------------------------------
// const calculateEngravingPrice = (message, pricePerWord) => {
//   const zmin = message.split(" ").length;
//   return zmin * pricePerWord;
// };
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );
