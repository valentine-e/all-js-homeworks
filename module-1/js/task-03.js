const ADMIN_PASSWORD = "123";
const userPassword = prompt("Введите пароль.");
let message;

if (userPassword === null) {
  message = "canceled";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "its ok";
} else {
  message = "its not ok";
}

alert(message);
