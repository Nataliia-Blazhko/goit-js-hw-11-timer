export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  interval = setInterval(() => {
    const time = this.targetDate - Date.now();
    if (time < 0) {
      clearInterval(this.interval);
      const timerContainer = document.querySelector(this.selector);
      timerContainer.querySelector("span[data-value='days']").textContent = 0;
      timerContainer.querySelector("span[data-value='hours']").textContent = 0;
      timerContainer.querySelector("span[data-value='mins']").textContent = 0;
      timerContainer.querySelector("span[data-value='secs']").textContent = 0;
      return;
    }
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const timerContainer = document.querySelector(this.selector);
    timerContainer.querySelector("span[data-value='days']").textContent = days;
    timerContainer.querySelector(
      "span[data-value='hours']",
    ).textContent = hours;
    timerContainer.querySelector("span[data-value='mins']").textContent = mins;
    timerContainer.querySelector("span[data-value='secs']").textContent = secs;
  }, 1000);
}
