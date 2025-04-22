function playSound() {
    document.getElementById("clickSound").play();
  }
  
  function changeHeadline() {
    document.getElementById("main-heading").innerText = "CLIMB TO NEW HEIGHTS!";
    playSound();
  }
  
  function addTagline() {
    if (!document.getElementById("tagline")) {
      const h3 = document.createElement("h3");
      h3.id = "tagline";
      h3.textContent = "Adventure Awaits!";
      document.querySelector(".hero").appendChild(h3);
    }
    playSound();
  }
  
  function removeTagline() {
    const tagline = document.getElementById("tagline");
    if (tagline) tagline.remove();
    playSound();
  }
  
  function secretMessage() {
    alert("🔥 You found the secret action! 🔥");
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "m") {
      alert("⛰️ Mountains are calling!");
    }
  });
  
  const passwordInput = document.getElementById("password");
  const feedback = document.getElementById("feedback");
  
  passwordInput.addEventListener("input", () => {
    const val = passwordInput.value;
    feedback.textContent = val.length < 8 ? "Password must be at least 8 characters." : "";
  });
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
  
  // TAB FUNCTIONALITY
  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  