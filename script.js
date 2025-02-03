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