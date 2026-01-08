
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    window.location.href = "register.html";
  });
}


const exploreBtn = document.getElementById("exploreSubsidies");

if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById("incentives")
      ?.scrollIntoView({ behavior: "smooth" });
  });
}


const locateBtn = document.getElementById("locateCharging");

if (locateBtn) {
  locateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Charging station map coming soon 🚗⚡");
  });
}


const form = document.getElementById("registerForm");
const formSection = document.getElementById("formSection");
const thankYouCard = document.getElementById("thankyouCard");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const userData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      mobile: document.getElementById("mobile").value.trim(),
      city: document.getElementById("city").value.trim()
    };

    try {
      const response = await fetch("https://frontend-final3.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

 
      if (formSection && thankYouCard) {
        formSection.style.display = "none";
        thankYouCard.style.display = "block";
      }

      console.log("Saved to DB:", data);

    } catch (error) {
      console.error("API Error:", error);
      alert("Server error. Please try again later.");
    }
  });
}
