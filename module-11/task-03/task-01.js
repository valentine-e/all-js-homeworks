// Твой код
const delay = (ms) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });

  return promise;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// function showError(error) {
//   document.body.innerHTML = `
//     <h1>Error</h1>
//     <p>${error}</p>
//     `;
// }

// const serverPromise = new Promise((resolve, reject) => {
//   // const response = {
//   //   status: 'ok',
//   //   data: "Data from server",
//   // };

//   const response = fetch(
//     ` "https://api.themoviedb.org/3/search/movie?api_key=qAsdasdqQQ&language=en-US&query=${string}&page=1&include_adult=true"`
//   );

//   if (response.status === "200") {
//     resolve(response.data);
//   }

//   if (response.status === "404") {
//     reject(response.status_message);
//   }
// });
