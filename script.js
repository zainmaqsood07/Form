document.getElementById("login-button").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "user" && password === "password") {
    alert("Logged in successfully!");
    location.reload();
  } else {
    alert("Invalid username or password");
  }
});
