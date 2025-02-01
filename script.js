window.onmousemove = (e) => {
  const dot = document.createElement("div");
  dot.className = "dot";

  // Position the dot at the mouse location
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;

  document.body.appendChild(dot);

  // Gradually fade out
  setTimeout(() => {
    dot.style.opacity = "0";
    setTimeout(() => dot.remove(), 500); // Remove after fade-out
  }, 50);
};

// Simple form validation example
document.addEventListener("DOMContentLoaded", function () {
  console.log("IDKK")
  const form = document.querySelector("form")

  form.addEventListener("submit", function (e) {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.")
    } else {
      alert("Thank you for your message!")
      form.reset()
    }
  })
})

const cards = document.querySelectorAll(".card-container .card")

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((sibling) => {
      if (sibling !== card) {
        sibling.style.filter = "brightness(0.4)" // Darken all siblings except the hovered one
      }
    })
  })

  card.addEventListener("mouseleave", () => {
    cards.forEach((sibling) => (sibling.style.filter = "")) // Reset the filter
  })
})

// Get the top banner element
const topBanner = document.querySelector(".top-banner")

// Function to handle the scroll event
function handleScroll() {
  // Check if the user has scrolled down more than 50 pixels (adjust as needed)
  if (window.scrollY > 50) {
    // Add the 'scrolled' class to the banner
    topBanner.classList.add("scrolled")
  } else {
    // Remove the 'scrolled' class if the user is at the top of the page
    topBanner.classList.remove("scrolled")
  }
}

// Add the scroll event listener to the window
window.addEventListener("scroll", handleScroll)

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form")

  form.addEventListener("submit", function (event) {
    let isValid = true
    const inputs = form.querySelectorAll("input, textarea")

    inputs.forEach((input) => {
      const errorMessage = input.nextElementSibling
      if (!input.value.trim()) {
        errorMessage.textContent = `${input.name} is required`
        errorMessage.style.display = "block"
        isValid = false
      } else {
        errorMessage.style.display = "none"
      }
    })

    if (!isValid) {
      event.preventDefault()
    }
  })

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      const errorMessage = this.nextElementSibling
      if (this.value.trim()) {
        errorMessage.style.display = "none"
      }
    })
  })
})
