//your JS code here. If required.
// Wait until DOM loads
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  // Check if credentials already exist in localStorage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline";
  }

  // Form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert("Logged in as " + username);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "inline";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  // Existing user login
  existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      alert("Logged in as " + savedUser);
    }
  });

});