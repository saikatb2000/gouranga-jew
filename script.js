document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     TESTIMONIAL SLIDER
  ========================== */

  const track = document.getElementById("testimonialTrack");

  if (track) {

    // Duplicate reviews for infinite loop
    track.innerHTML += track.innerHTML;

    let position = 0;
    let autoScroll = true;
    const speed = 0.35;

    function animate() {

      if (autoScroll) {

        position += speed;

        if (position >= track.scrollWidth / 2) {
          position = 0;
        }

        track.style.transform = `translateX(-${position}px)`;
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Arrow buttons
    window.moveSlider = function(direction) {

      position += direction * 320;

      if (position < 0) {
        position = track.scrollWidth / 2;
      }

      if (position >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(-${position}px)`;
    };

    /* ==========================
       REVIEW POPUP
    ========================== */

    const modal = document.getElementById("reviewModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".testimonial").forEach(card => {

      card.addEventListener("click", () => {

        autoScroll = false;

        if (modalTitle) {
          modalTitle.innerHTML =
            card.querySelector("h4").innerHTML;
        }

        if (modalText) {
          modalText.textContent =
            card.querySelector("p").textContent;
        }

        if (modal) {
          modal.style.display = "flex";
        }

      });

    });

    if (closeBtn) {

      closeBtn.addEventListener("click", () => {

        if (modal) {
          modal.style.display = "none";
        }

        autoScroll = true;

      });

    }

    window.addEventListener("click", (e) => {

      if (e.target === modal) {

        modal.style.display = "none";
        autoScroll = true;

      }

    });

  }

});

// WhatsApp Form Submission
function sendToWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "918961861101"; // replace with your number

  const text = `Hello, I want to contact you:

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}


// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById("mobileDropdown");
  menu.classList.toggle("show");
}