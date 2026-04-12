const track = document.getElementById('testimonialTrack');

function moveSlider(direction) {
  track.scrollBy({ left: direction * 340, behavior: 'smooth' });
}

setInterval(() => {
  track.scrollBy({ left: 340, behavior: 'smooth' });
}, 4000);

function toggleMenu() {
  const menu = document.getElementById("mobileDropdown");
  menu.classList.toggle("show");
}
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