function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill the inputs");
    return false;
  }

  if (username === "") {
    document.getElementById("username").style.borderColor = "red";
  }
  if (password === "") {
    document.getElementById("password").style.borderColor = "red";
  }
  return true;
}

document.getElementById("submit").addEventListener("click", function () {
  validate();
});
