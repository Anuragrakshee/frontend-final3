// Register EV buttons (navbar + anywhere)
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    window.location.href = "register.html";
  });
}

// Explore Subsidies button
const exploreBtn = document.getElementById("exploreSubsidies");

if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById("incentives")
      ?.scrollIntoView({ behavior: "smooth" });
  });
}

// Locate Charging button
const locateBtn = document.getElementById("locateCharging");

if (locateBtn) {
  locateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Charging station map coming soon 🚗⚡");
  });
}
