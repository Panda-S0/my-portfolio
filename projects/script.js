window.onmousemove = (e) => {
  const dot = document.createElement("div")
  dot.className = "dot"

  // Position the dot at the mouse location
  dot.style.left = `${e.clientX}px`
  dot.style.top = `${e.clientY}px`

  document.body.appendChild(dot)

  // Gradually fade out
  setTimeout(() => {
    dot.style.opacity = "0"
    setTimeout(() => dot.remove(), 500) // Remove after fade-out
  }, 50)
}

// Simple form validation example
document.addEventListener("DOMContentLoaded", function () {
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


document.addEventListener('DOMContentLoaded', function() {
  // Array of section IDs
  const sectionIds = ['react-native-section', 'python-section', 'godot-section'];

  // Loop through each section ID
  sectionIds.forEach((sectionId) => {
    // Select the section
    const section = document.getElementById(sectionId);

    const projectsparts = section.querySelectorAll('.project-part');
    projectsparts.forEach((projectpart)=>{
      
    // Select elements only within the section
    const images = projectpart.querySelectorAll('.images-part img'); // Select all images inside .images-part within the section
    const prevButton = projectpart.querySelector('.click.left');
    const nextButton = projectpart.querySelector('.click.right');
    let currentIndex = 0;

    // Function to update image positions
    function updateImages() {
      // console.log(images)
      images.forEach((img, i) => {
        img.classList.remove('active', 'prev', 'next'); // Reset all classes

        if (i === currentIndex) {
          img.classList.add('active'); // Active image is centered
        } else if (i === (currentIndex - 1 + images.length) % images.length) {
          img.classList.add('prev'); // Previous image is to the left
        } else if (i === (currentIndex + 1) % images.length) {
          img.classList.add('next'); // Next image is to the right
        }
      });
    }

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index (loop around if necessary)
      updateImages(); // Update image positions
    });

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length; // Increment index (loop around if necessary)
      updateImages(); // Update image positions
    });

    // Initialize the first image as active
    updateImages();
    })
  });
});








document.addEventListener('DOMContentLoaded', function() {
  // Array of section IDs
  const sectionIds = ['react-native-section', 'python-section', 'godot-section'];

  // Loop through each section ID
  sectionIds.forEach((sectionId) => {
    // Select the section
    const section = document.getElementById(sectionId);

    // Select elements only within the section
    const projects = section.querySelectorAll('.projects-container .project-part'); // Select all images inside .images-part within the section
    const prevButton = section.querySelector('.click.left.forBtnPart');
    const nextButton = section.querySelector('.click.right.forBtnPart');
    let currentIndex = 0;

    // Function to update image positions
    function updateProjects() {
      projects.forEach((prj, i) => {
        prj.classList.remove('active', 'prev', 'next'); // Reset all classes

        if (i === currentIndex) {
          prj.classList.add('active'); // Active image is centered
        } else if (i === (currentIndex - 1 + projects.length) % projects.length) {
          prj.classList.add('prev'); // Previous image is to the left
        } else if (i === (currentIndex + 1) % projects.length) {
          prj.classList.add('next'); // Next image is to the right
        }
      });
    }

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length; // Decrement index (loop around if necessary)
      updateProjects(); // Update image positions
    });

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % projects.length; // Increment index (loop around if necessary)
      updateProjects(); // Update image positions
    });

    // Initialize the first image as active
    updateProjects();
  });
});








