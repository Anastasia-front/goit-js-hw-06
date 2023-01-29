const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  event.currentTarget.reset();
});
