// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login, min = 4, max = 16) {
//   return login.length >= min && login.length <= max;
//   // твій код
//   // length;
// };

// const isLoginUnique = function (allLogins, login) {
//   return !allLogins.includes(login);
// };

// const addLogin = function (allLogins, login) {
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используетса!";
//   const ERROR = "Ошибка! Логин должен быть от 4 до 16 символов"; // твій код
//   let message;
// if (!isLoginValid(login)) {
//   message = ERROR;
// } else if (!isLoginUnique(allLogins, login)) {
//   message = REFUSAL;
// } else {
//   message = SUCCESS;
//   allLogins.push(login);
// }
// return message;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
// console.log(addLogin(logins, "robotGoogles")); //'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// ---------------------------------------------------------------------

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login, min = 4, max = 16) {
  if (login.length > min && login.length < max) {
    return true;
  } else return false;
}

function isLoginUnique(allLogins, login) {
  for (let i = 0; i < allLogins.length; i += 1) {
    if (login !== allLogins[i]) {
      return true;
    }
    // console.log(allLogins[i]);
    else return false;
  }
}

function addLogin(allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) === true
  ) {
    allLogins.push(login);
    message = SUCCESS;
  } else if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) === false
  ) {
    message = REFUSAL;
  } else if (isLoginValid(login) === false) {
    message = ERROR;
    return message;
  }
}

// Write code under this line

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); //'Такой логин уже используется!'
console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
