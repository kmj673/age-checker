const form = document.querySelector("#age");

function handleAge(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);
  let age = data.age;
  return age;
}

function checkNumber(age) {
  let intAge = parseInt(age);
  let notANumber = Number.isNaN(intAge);
  let numberOrNot = notANumber ? false : true;
  return numberOrNot;
}

function calculate(age) {
  let eighteenOlder = age >= 18 ? true : false;
  console.log(eighteenOlder);
}

form.addEventListener("submit", (e) => {
  let age = handleAge(e);
  console.log(checkNumber(age));
  if (checkNumber(age)) {
    calculate(age);
  } else {
    console.log(`enter valid number as age`);
  }
});
