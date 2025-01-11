let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

if (sections.length > 0 && navLinks.length > 0) {
    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
                });
            }
        });

        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);

        if (menuIcon && navbar) {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    };
}


ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'B.Tech Student'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,
});

(function () {
    emailjs.init("ZL75N3RMSNJQyRmxG");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        user_phone: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_w2kihp2", "template_30vxs0g", formData)
        .then(function (response) {
            alert("Message Sent Successfully!");
        }, function (error) {
            alert("Failed to send message. Please try again later.");
        });
});