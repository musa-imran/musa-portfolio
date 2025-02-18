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
    const modal = document.getElementById("projectModal");
    const carouselInner = document.getElementById("carouselImages");
    const modalTitle = document.getElementById("projectModalLabel");
    const imageDescription = document.getElementById("imageDescription");
    const viewImageBtn = document.getElementById("viewImageBtn");
  
    document.querySelectorAll(".view-details-btn").forEach(button => {
      button.addEventListener("click", function () {
        const title = this.getAttribute("data-title");
        const images = JSON.parse(this.getAttribute("data-images"));
  
        modalTitle.textContent = title;
        carouselInner.innerHTML = "";
        imageDescription.textContent = images[0].desc;
        viewImageBtn.href = images[0].src; // Default to first image
  
        images.forEach((image, index) => {
          const isActive = index === 0 ? "active" : "";
          const slide = `
            <div class="carousel-item ${isActive}">
              <img src="${image.src}" class="d-block w-100" alt="${image.desc}">
            </div>`;
          carouselInner.innerHTML += slide;
        });
  
        // Update the "View Image" button when a slide changes
        document.querySelector("#projectCarousel").addEventListener("slid.bs.carousel", function (event) {
          const currentIndex = event.to;
          imageDescription.textContent = images[currentIndex].desc;
          viewImageBtn.href = images[currentIndex].src;
        });
      });
    });
  });  




  async function fetchVisitorCount() {
    try {
      let response = await fetch('https://api.countapi.xyz/hit/musa-portfolio.com/visits');
      let data = await response.json();
      document.getElementById('visitorCounter').innerText = data.value;
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      document.getElementById('visitorCounter').innerText = "Unavailable";
    }
  }
  fetchVisitorCount();

  