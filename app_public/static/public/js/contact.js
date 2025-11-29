document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("success-message");
  if (success) success.style.display = "none";
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    form.classList.remove("was-validated");
    if (success) {
      success.classList.remove("hidden");
      success.style.display = "block";
      success.style.opacity = 0;
      success.style.transition = "opacity 300ms ease-in-out";
      requestAnimationFrame(function () {
        success.style.opacity = 1;
      });
      success.setAttribute("tabindex", "-1");
      success.focus();
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.reset();
  });
});
