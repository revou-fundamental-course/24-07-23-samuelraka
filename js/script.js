function scrollToHome() {
    const homeSection = document.getElementById("home");
    scrollSmoothToElement(homeSection);
  }
  
  function scrollToOurPackages() {
    const ourPackagesSection = document.getElementById("our-packages");
    scrollSmoothToElement(ourPackagesSection);
  }
  
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    scrollSmoothToElement(contactSection);
  }
  
  function scrollSmoothToElement(element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
  
    let start = null;
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  }

  
  function validateForm() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
  
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    
    let hasError = false;
  
    
    if (name.trim() === '') {
      alert('Please enter your name.');
      hasError = true;
    }
  
    if (email.trim() === '') {
      alert('Please enter your email.');
      hasError = true;
    } else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      hasError = true;
    }
  
    if (destination === 'default') {
      alert('Please select a destination.');
      hasError = true;
    }
  
    if (!hasError) {
        alert('Form successfully submitted!');
        return true;
      }
    
      
      return false;
    }

    const imageSlider = document.querySelector(".image-slider");
let imageIndex = 0;

function slideImage() {
    const imageWidth = document.querySelector(".image-container").clientWidth;
    imageSlider.style.transform = `translateX(-${imageWidth * imageIndex}px)`;
}

function nextImage() {
    imageIndex = (imageIndex + 1) % 3;
    slideImage();
}

function prevImage() {
    imageIndex = (imageIndex - 1 + 3) % 3;
    slideImage();
}


let touchStartX = 0;
let touchEndX = 0;

imageSlider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

imageSlider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
        prevImage();
    } else if (swipeDistance < -50) {
        nextImage();
    }
});


setInterval(nextImage, 5000);

function callUs() {
  const phoneNumber = "+62894816238764"; 
  alert("Call us now at " + phoneNumber + " for the best travel experience!");
}


const callUsButton = document.querySelector(".contact-button");
callUsButton.addEventListener("click", callUs);