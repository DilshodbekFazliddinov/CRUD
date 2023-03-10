const formel = document.querySelector("form");
let validate = document.querySelector("#validate");
let validate2 = document.querySelector("#validate2");
let validate3 = document.querySelector("#validate3");
const tbody = document.querySelector("#tbody");

formel.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = formel["name"].value;
  const email = formel["email"].value;
  const password = formel["password"].value;

  if (name.length && email.length && password.length) {
    const newList = document.createElement("tr");

    // new name
    const newName = document.createElement("td");
    newName.innerHTML = name;
    newList.appendChild(newName);

    // new email
    const newEmail = document.createElement("td");
    newEmail.innerHTML = email;
    newList.appendChild(newEmail);

    // new password
    const newPassword = document.createElement("td");
    newPassword.innerHTML = password;
    newList.appendChild(newPassword);

    const actions = document.createElement("td");
    let btn = document.createElement("button");
    btn.classList = "btn btn-primary";
    btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    actions.appendChild(btn);
    newList.appendChild(actions);
    tbody.appendChild(newList);

    // adeventlissener
    newList.addEventListener("dblclick", () => {
      newList.style = "opacity:0.8";
    });
    btn.addEventListener("dblclick", () => {
      alert(`siz rostan ham o'chirmoqchimisiz?`);
      newList.remove();
    });
  } else if (name.length == 0) {
    validate.textContent = "Iltimos ma'lumotlarni kiriting";
    setTimeout(() => {
      validate.textContent = "";
    }, 2000);
  } else if (email.length == 0) {
    validate2.textContent = "Iltimos ma'lumotlarni kiriting";
  } else if (password.length == 0) {
    validate3.textContent = "Iltimos ma'lumotlarni kiriting";
  }
  formel.reset();
});
