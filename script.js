  // Select all nav links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add click event listeners to each link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove 'active' class from all links
      navLinks.forEach(navLink => navLink.classList.remove('active'));

      // Add 'active' class to the clicked link
      link.classList.add('active');
    });
  });

  // Optional: Automatically update active link based on scroll position
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 3000); // Matches the total animation time
  });

  

  document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter");
    let speed = 200; // Counter speed
  
    counters.forEach(counter => {
      let updateCount = () => {
        let target = +counter.getAttribute("data-count");
        let count = +counter.innerText;
        let increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  });

  


  document.addEventListener("DOMContentLoaded", function () {
    const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));
  
    document.querySelectorAll(".view-details-btn").forEach(button => {
      button.addEventListener("click", function () {
        const title = this.getAttribute("data-title");
        const images = JSON.parse(this.getAttribute("data-images"));
  
        document.getElementById("projectModalLabel").textContent = title;
  
        // Populate Carousel
        const carouselInner = document.getElementById("carouselImages");
        const imageDescription = document.getElementById("imageDescription");
        carouselInner.innerHTML = ""; // Clear existing images
  
        images.forEach((img, index) => {
          const activeClass = index === 0 ? "active" : "";
          carouselInner.innerHTML += `
            <div class="carousel-item ${activeClass}" data-description="${img.desc}">
              <img src="${img.src}" class="d-block w-100" alt="${title}">
            </div>
          `;
        });
  
        // Set initial image description
        imageDescription.textContent = images[0].desc;
  
        // Update description on slide change
        document.getElementById("projectCarousel").addEventListener("slid.bs.carousel", function (event) {
          const activeItem = event.relatedTarget;
          imageDescription.textContent = activeItem.getAttribute("data-description");
        });
  
        projectModal.show();
      });
    });
  });
  