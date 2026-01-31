// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Popup
function openPopup(name, role, about) {
  document.getElementById("popupName").innerText = name;
  document.getElementById("popupRole").innerText = role;
  document.getElementById("popupAbout").innerText = about;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Buttons
function registerAlert() {
  alert("Registration coming soon 🚀 Stay connected with WRO!");
}

function showCentres() {
  alert("WRO Centres:\n\n📍 New Delhi\n📍 Noida\n📍 Ghaziabad\n📍 Lucknow");
}

function becomeMember() {
  alert("🚀 Coming Soon!\nStay connected with WRO.");
}
