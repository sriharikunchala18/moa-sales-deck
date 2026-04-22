// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^=\"#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinksMobile = document.querySelector('.nav-links');
  
  if (hamburger && navLinksMobile) {
    hamburger.addEventListener('click', () => {
      navLinksMobile.classList.toggle('active');
    });
  }

  // Scroll reveal for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Video play on scroll/visible
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    const vidObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
    vidObserver.observe(video);
  });

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(255,255,255,0.98)';
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
      nav.style.background = 'rgba(255,255,255,0.95)';
      nav.style.boxShadow = 'none';
    }
  });

  // Parallax effect for hero if needed (light)
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});
