const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");

seal.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    invitation.hidden = false;
    intro.style.display = "none";
    invitation.scrollIntoView({ behavior: "smooth" });
  }, 1700);
});

document.getElementById("rsvpButton").addEventListener("click", () => {
  const panel = document.getElementById("rsvpPanel");
  panel.hidden = !panel.hidden;
  if (!panel.hidden) panel.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("sendRsvp").addEventListener("click", () => {
  const name = document.getElementById("guestName").value.trim();
  const attending = document.getElementById("attendance").value;
  const count = document.getElementById("guestCount").value;

  if (!name) {
    alert("Te rugăm să introduci numele.");
    return;
  }

  const message = "Confirmare nuntă Diana & Daniel: " +
    name + " | Participare: " + attending +
    " | Persoane: " + count;

  const recipient = document.getElementById("recipient").value;

const phone = recipient === "Diana"
  ? "40790261021"
  : "40730487645";

window.open(
  "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
  "_blank"
);
});