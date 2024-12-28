import emailjs from 'emailjs-com';

emailjs.init("Pqpd7XS9IGWp6FHQU"); // Replace with your public API key

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        query: formData.get("query"),
    };

    // Send email using EmailJS
    emailjs.send("service_9di2jm8", "template_riyddsp", data) // Replace with your service ID and template ID
        .then(function(response) {
            // Show success message
            document.getElementById("response-message").innerText = "Your message has been sent successfully!";
            document.getElementById("response-message").style.display = "block";
            document.getElementById("error-message").style.display = "none";
            document.getElementById('contact-form').reset();
        }, function(error) {
            // Show error message
            document.getElementById("error-message").innerText = "There was an error sending your message. Please try again later.";
            document.getElementById("error-message").style.display = "block";
            document.getElementById("response-message").style.display = "none";
        });
});