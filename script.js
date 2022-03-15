const form = document.querySelector("#age");
const output = document.querySelector("output");
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

function minusNumber(age) {
  if (age < 0) return false;
  else return true;
}

function calculate(age) {
  let eighteenOlder = age >= 18 ? true : false;
  return eighteenOlder;
}

form.addEventListener("submit", (e) => {
  output.innerHTML = "";
  let age = handleAge(e);
  if (checkNumber(age) && minusNumber(age)) {
    let result = calculate(age);
    if (result) window.location.href = "./success.html";
    else window.location.href = "./failure.html";
  } else {
    let span = document.createElement("span");
    span.textContent = `${age} is not valid`;
    output.appendChild(span);
  }
});
