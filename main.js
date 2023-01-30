const svgerroff="opacity-0 relative -top-12 left-64";
const svgerron="opacity-100 relative -top-12 left-64";
function validateEmail() {
  var email = document.getElementById("email").value;
  console.log(email);
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
    if (re.test(String(email).toLowerCase())) {
    document.getElementById("svgerr").style.opacity=0;
    document.getElementById("email").style.borderColor="green";
    document.getElementById("err").style.opacity=0;
  } else {
    document.getElementById("email").style.borderColor="red";
    document.getElementById("svgerr").style.opacity=100;
    document.getElementById("err").style.opacity=100;
  }
}
