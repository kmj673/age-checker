const form = document.querySelector("#age");

function handleForm(e) {
  e.preventDefault();
  console.log(e);
}

form.addEventListener("submit", handleForm);
