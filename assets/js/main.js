function login() {
  let x, y;
  x = document.getElementById("username").value;
  y = document.getElementById("password").value;

  if (y == "javascript") {
    alert("Tebrikler daxil oldunuz ...");
    document.getElementById("myform").action = "https://mashin.al/";
  } else {
    alert("Parolunuz duzgun deyil !!!");
    document.getElementById("myform").action="";
  }
}
