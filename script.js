// Hamburger menu function to show and hide the mobile menu
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

// Function to hide the hamburger menu
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect for text display
const texts = ["SOFTWARE DEVELOPER"];
let speed = 250;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
  if (charcterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(typeWriter, speed);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charcterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

// Start typewriter effect when page loads
window.onload = function () {
  // Get video elements
  const preloaderVideo = document.getElementById("preloader-video");
  const backgroundVideo = document.getElementById("background-video");
  // const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  // Ensure preloader video plays once
  preloaderVideo.currentTime = 0;
  preloaderVideo.play();

  // Speed up preloader video (optional)
  preloaderVideo.playbackRate = 2.0;

  // Once preloader video ends
  preloaderVideo.addEventListener("ended", function () {
    // Fade out preloader
    preloader.classList.add("fade-out");

    // Wait for fade-out animation to complete
    setTimeout(function () {
      preloader.style.display = "none"; // Hide preloader
      mainContent.style.display = "block"; // Show main content

      // Show and play background video
      backgroundVideo.style.display = "block";
      backgroundVideo.play();
    }, 1000);
  });

  // Start typewriter effect
  typeWriter();
};

// JavaScript to toggle the mobile menu visibility
function hamburg() {
  const links = document.querySelector(".nav-container .links");
  links.classList.toggle("active"); // Toggle the "active" class to show or hide the menu
}

// Handling the contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    // Basic validation
    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    // Send data to Formspree (replace with your actual Formspree endpoint)
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      let response = await fetch("https://formspree.io/f/xwpvykqa", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        document.getElementById("contact-form").reset();
      } else {
        formMessage.textContent = "Failed to send message. Try again later.";
        formMessage.style.color = "red";
      }
    } catch (error) {
      formMessage.textContent = "An error occurred. Please try again.";
      formMessage.style.color = "red";
    }
  });

document.querySelectorAll(".skill-bar").forEach((skillBar) => {
  const percentage = skillBar.getAttribute("data-percent");

  // Create tooltip
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = percentage;
  skillBar.appendChild(tooltip);
});
