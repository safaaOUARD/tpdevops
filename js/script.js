const btn = document.getElementById("btn");
const message = document.getElementById("message");
let compteur = 0;

btn.addEventListener("click", () => {
  compteur++;
  message.textContent = "Tu as cliqué " + compteur + " fois !";
});
