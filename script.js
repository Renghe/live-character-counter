const textarea = document.getElementById("inputBox");
const counter = document.getElementById("charCount");
const button = document.getElementById("submitBtn");
const darkToggle = document.getElementById("darkModeToggle");
const container = document.querySelector(".container");
const successMessage = document.getElementById("successMessage");

const limit = 100;

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  counter.textContent = `${length}/${limit}`;

  if (length > limit) {
    counter.style.color = "red";
    button.disabled = true;
  } else if (length > 80) {
    counter.style.color = "orange";
    button.disabled = false;
  } else {
    counter.style.color = "green";
    button.disabled = false;
  }
});


button.addEventListener("click", () => {
  const submittedText = textarea.value;

  successMessage.textContent = `✅ You submitted: "${submittedText}"`;
  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);

  textarea.value = "";
  counter.textContent = "0/100";
  counter.style.color = "green";
  button.disabled = true;
});


darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");
});
