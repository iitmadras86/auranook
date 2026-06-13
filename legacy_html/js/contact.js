document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const formData = {
                name,
                email,
                phone,
                message
            };

            console.log('Form Submission:', formData);

            // Placeholder for actual API call
            // const response = await fetch('https://api.example.com/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // });

            // Simulate success
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
