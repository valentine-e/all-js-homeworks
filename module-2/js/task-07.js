const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  // твой код
  // if (4 <= login.length && login.length <= 16) {
  //   return true;
  // }
  // return false;

  return 4 <= login.length && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  // твой код

  return !allLogins.includes(login);

  // if (allLogins.includes(login)) {
  //   return false;
  // }
  // return true;
};

const addLogin = function (allLogins, login) {
  // твой код

  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      return "Логін успішно доданий";
    }
    return "Такий логін вже використовується!";
  }
  return "Помилка! Логін має бути від 4 до 16 символів";
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
