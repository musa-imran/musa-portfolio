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



  async function trackResumeDownload() {
    let downloadCount = parseInt(localStorage.getItem("resumeDownloads")) || 0;
    downloadCount++;
    localStorage.setItem("resumeDownloads", downloadCount);
    document.getElementById("resumeDownloadCounter").innerText = downloadCount;
  }

  async function showDownloadCountForMe() {
    try {
      let response = await fetch("https://api.ipify.org?format=json");
      let data = await response.json();
      let myIP = "39.40.161.245"; // Replace this with your IP

      if (data.ip === myIP) {
        document.getElementById("resumeDownloadCounterContainer").style.display = "block";
      }
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("resumeDownloadCounter").innerText =
      localStorage.getItem("resumeDownloads") || 0;

    showDownloadCountForMe();
  });







  async function fetchVisitorCount() {
    try {
      let response = await fetch("https://api.ipify.org?format=json");
      let data = await response.json();
      let visitorIP = data.ip;

      let storedIPs = JSON.parse(localStorage.getItem("visitorIPs")) || [];
      
      if (!storedIPs.includes(visitorIP)) {
        storedIPs.push(visitorIP);
        localStorage.setItem("visitorIPs", JSON.stringify(storedIPs));
      }

      document.getElementById("visitorCounter").innerText = storedIPs.length;
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      document.getElementById("visitorCounter").innerText = "Unavailable";
    }
  }

  document.addEventListener("DOMContentLoaded", fetchVisitorCount);