let login = document.getElementById("login");

let baseData = {
  email: "andri@gmail.com",
  password: "a12345",
};

login.addEventListener("click", function () {
  let email_login = document.getElementById("email_login").value;
  let password_login = document.getElementById("password_login").value;

  if (email_login == baseData.email && password_login == baseData.password) {
    alert("welcome");
  }
});
