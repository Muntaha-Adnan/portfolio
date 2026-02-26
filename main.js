const navLinks = document.querySelectorAll('nav ul li a'); 
const sections = document.querySelectorAll('section');     


navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
  

   
    navLinks.forEach(l => l.classList.remove('active'));
    
    this.classList.add('active');
  });
});


window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});





document.addEventListener("DOMContentLoaded", function () {
  
const skillsSection = document.querySelector(".skills-section");
const circles = document.querySelectorAll(".circle");
const progressBars = document.querySelectorAll(".progress");

function showSkills() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    skillsSection.classList.add("show");

    progressBars.forEach(bar => {
      if (bar.classList.contains("html")) bar.style.width = "90%";
      if (bar.classList.contains("css")) bar.style.width = "85%";
      if (bar.classList.contains("js")) bar.style.width = "80%";
      if (bar.classList.contains("python")) bar.style.width = "75%";
      if (bar.classList.contains("cpp")) bar.style.width = "70%";
    });

    circles.forEach(circle => {
  const percent = circle.getAttribute("data-percent");
  let start = 0;
  const end = percent * 3.6;

  const interval = setInterval(() => {
    start += 3;

    circle.style.background =
      `conic-gradient(rgb(50, 50, 109) ${start}deg, #e0e0e0 ${start}deg)`;

    if (start >= end) {
      clearInterval(interval);
    }
  }, 15);
});

    window.removeEventListener("scroll", showSkills);
  }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showSkills();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillsSection);

});


