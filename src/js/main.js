// UI elements
const day_output = document.getElementById("day_output");
const hour_output = document.getElementById("hour_output");
const minute_output = document.getElementById("minute_output");
const second_output = document.getElementById("second_output");
let startTime = new Date().getTime();
// Time manipulation
const mytimer1 = setInterval(() => {
  let nowTime = new Date().getTime();
  let deadTime = startTime + 14 * 24 * 60 * 60 * 1000;
  let difference = deadTime - nowTime;
  if (difference >= 0) {
    let day_rem = Math.floor(difference / 86400000);
    let hour_rem = Math.floor((difference % 86400000) / 3600000);
    let minute_rem = Math.floor(((difference % 86400000) % 3600000) / 60000);
    let second_rem = Math.floor(
      (((difference % 86400000) % 3600000) % 60000) / 1000
    );
    updateUi2(day_rem, hour_rem, minute_rem, second_rem);
  } else {
    resetUi();
    clearInterval(mytimer1);
  }
}, 1000);

// Functions
const addZero = function (val) {
  if (val < 10) return "0" + val;
  else return val;
};

const timeComparison = function (oldVal, newVal, $el) {
  if (newVal !== oldVal) {
    $el.parentElement.querySelector(".flip_box").classList.add("active");
    $el.textContent = addZero(newVal);
  } else
    $el.parentElement.querySelector(".flip_box").classList.remove("active");
};

// Reset the Timer
const resetUi = function () {
  day_output.textContent = addZero(0);
  hour_output.textContent = addZero(0);
  minute_output.textContent = addZero(0);
  second_output.textContent = addZero(0);
};

const updateUi2 = function (dy, hr, min, sec) {
  let oldDay = Number(day_output.textContent);
  let oldHr = Number(hour_output.textContent);
  let oldMin = Number(minute_output.textContent);
  let oldSec = Number(second_output.textContent);
  timeComparison(oldDay, dy, day_output);
  timeComparison(oldHr, hr, hour_output);
  timeComparison(oldMin, min, minute_output);
  timeComparison(oldSec, sec, second_output);
  // ! day comparison
  // if (dy !== oldDay) {
  //   day_output.parentElement.querySelector(".flip_box").classList.add("active");
  //   day_output.textContent = addZero(dy);
  // } else
  //   day_output.parentElement
  //     .querySelector(".flip_box")
  //     .classList.remove("active");
  // ! hour comparison
  // if (hr !== oldHr) {
  //   hour_output.parentElement
  //     .querySelector(".flip_box")
  //     .classList.add("active");
  //   hour_output.textContent = addZero(hr);
  // } else
  //   hour_output.parentElement
  //     .querySelector(".flip_box")
  //     .classList.remove("active");
  // ! minute comparison
  // if (min !== oldMin) {
  //   minute_output.parentElement
  //     .querySelector(".flip_box")
  //     .classList.add("active");
  //   minute_output.textContent = addZero(min);
  // } else
  //   minute_output.parentElement
  //     .querySelector(".flip_box")
  //     .classList.remove("active");
  // ! second comparison
  // if (sec !== oldSec && sec !== 0) {
  //   second_output.parentElement
  //     .querySelector(".flip_box")
  //     .classList.add("active");
  //   second_output.textContent = addZero(sec);
  // } else
  //   second_output.parentElement
  //     .querySelector(".flip_box")
  //     .classList.remove("active");
};

resetUi();
