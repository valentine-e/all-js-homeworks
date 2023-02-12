// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.refs = {};
//   }

//   timeCounter() {
//     const currentTime = new Date();
//     const days = Math.floor(
//       (this.targetTime - currentTime) / (1000 * 60 * 60 * 24)
//     );
//     const hours = Math.floor(
//       ((this.targetTime - currentTime) % (1000 * 60 * 60 * 24)) /
//         (1000 * 60 * 60)
//     );
//     const mins = Math.floor(
//       ((this.targetTime - currentTime) % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const secs = Math.floor(
//       ((this.targetTime - currentTime) % (1000 * 60)) / 1000
//     );
//     return { days, hours, mins, secs };
//   }

//   getRefs() {
//     const element = document.querySelector(this.selector);
//     this.refs.htmlDay = element.querySelector('span[data-value="days"]');
//     this.refs.htmlHour = element.querySelector('span[data-value="hours"]');
//     this.refs.htmlMin = element.querySelector('span[data-value="mins"]');
//     this.refs.htmlSecs = element.querySelector('span[data-value="secs"]');
//   }

//   renderTimer({ days, hours, mins, secs }) {
//     this.refs.htmlDay.innerHTML = days;
//     this.refs.htmlHour.innerHTML = hours;
//     this.refs.htmlMin.innerHTML = mins;
//     this.refs.htmlSecs.innerHTML = secs;
//   }

//   start() {
//     this.getRefs();

//     this.renderTimer(this.timeCounter());

//     setInterval(() => {
//       this.renderTimer(this.timeCounter());
//     }, 1000);
//   }
// }

// timer.start();

// 1. Взяти посилання на ХТМЛ елементи в які ми будемо підставляти цифри.
// 2. Вирахувати цифри (дні, год., хв., сек.), які ми маємо підставити (різниця між цільовою і поточною датами).
// 3. Підставити пораховані цифри у ХТМЛ розмітку.

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2023"),
});
