document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Initialize EmailJS
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID

    // Collect form data
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    // Send email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
        .then(() => {
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        });
});
