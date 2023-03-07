console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const checkSubmit = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  let tos = data["tos"];
  console.log(tos);

  if (tos !== "on") {
    showTosError();
    return;
  }
  hideTosError();
  checkSubmit.removeAttribute("hidden");
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  /*alert("Form submitted");*/
});
