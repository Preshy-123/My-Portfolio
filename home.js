function openMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");

  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
}

const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // // Change button text/icon depending on mode
  // if (document.body.classList.contains("dark-mode")) {
  //   toggleBtn.textContent = "Light Mode";
  // } else {
  //   toggleBtn.textContent = "Dark Mode";
  // }
});

const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from submitting right away

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    errorMsg.textContent = "⚠️ Please fill in all fields before sending.";
  } else {
    errorMsg.textContent = "";
    alert("✅ Message sent successfully!");
    form.reset(); // clear the form
  }
});
