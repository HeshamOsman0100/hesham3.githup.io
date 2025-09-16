// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active'); // Close mobile menu
    });
});

// Contact Form Submission (Example with Formspree)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        alert('Error sending message. Please try again.');
    }
});