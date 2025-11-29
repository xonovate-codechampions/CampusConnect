document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("success-message");
  if (success) {
    success.classList.add("d-none");
    success.style.display = "none";
  }
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    form.classList.remove("was-validated");
    if (success) {
      const nameInput = document.getElementById("name");
      console.log(nameInput.value);
      success.textContent = `Thank you, ${nameInput.value}. We will get back to you shortly.`;
      success.classList.remove("d-none");
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
