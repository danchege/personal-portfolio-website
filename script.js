// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year in footer
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Daniel Chege. All rights reserved.`;

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.padding = '10px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.backgroundColor = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Highlight active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
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

// Typewriter effect for introduction
const introText = "Hello! I'm Daniel Chege, Welcome to my portfolio!";
const introElement = document.querySelector('header p');
let index = 0;

function typeWriter() {
    if (index < introText.length) {
        introElement.textContent += introText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Scroll animations for sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

sections.forEach(section => {
    section.classList.add('hidden'); // Initially hide sections
    observer.observe(section);
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.backgroundColor = '#333';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Loading spinner
const spinner = document.createElement('div');
spinner.classList.add('spinner');
document.body.appendChild(spinner);

window.addEventListener('load', () => {
    spinner.style.display = 'none';
});

// Show only the selected section and hide the others
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the targeted section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Show the first section by default
document.querySelector('section').style.display = 'block';

// Form validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }

    alert('Your message has been sent successfully!');
});

// CV download function
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'documents/Daniel Chege cv.pdf';
    link.download = 'Daniel_Chege_cv.pdf';
    link.click();
}
