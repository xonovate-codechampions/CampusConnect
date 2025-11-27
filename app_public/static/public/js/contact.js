

const submitButton = document.querySelector(".btn-submit");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  
// const fullName = document.getElementById("fullName").value;
// // const email = document.getElementById("email").value;
// // const subject = document.getElementById("subject").value;
// // const message = document.getElementById("message").value;

// // fullName.onkeyup=function() {
// //   if (fullName==="") {
// //     document.getElementById("fullName").style.border="2px solid red";
// //   } else {
// //     document.getElementById("fullName").style.border="2px solid green";
// //   }
// // }
  
  document.getElementById("successMessage").style.display = "block";
});