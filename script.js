document.addEventListener("DOMContentLoaded", () => {
    
    // FEATURE 1: Dynamic Content (Date, Time, and Personalized Greeting)
    const timeElement = document.getElementById("currentTime");
    const greetingElement = document.getElementById("dynamicGreeting");

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        const timeString = now.toLocaleTimeString('en-US');
        const dateString = now.toLocaleDateString('en-US', options);
        
        if(timeElement) {
            timeElement.innerHTML = `🕒 ${timeString} <br> ${dateString}`;
        }

        // Greeting Logic for Home Page
        if (greetingElement) {
            const hour = now.getHours();
            let greeting = "Magandang Araw! ☀️"; // Default
            if (hour < 12) greeting = "Magandang Umaga! 🌅";
            else if (hour < 18) greeting = "Magandang Hapon! 🌤️";
            else greeting = "Magandang Gabi! 🌙";
            
            greetingElement.innerText = `${greeting}\n${dateString} (${timeString})`;
        }
    }
    
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call

    // FEATURE 2: Interactive Accordion Toggle (About Page)
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the content
            const content = this.nextElementSibling;
            
            // Close all others (optional, but good UX)
            document.querySelectorAll('.accordion-content').forEach(item => {
                if(item !== content) item.classList.remove('active');
            });

            content.classList.toggle('active');
        });
    });

    // FEATURE 3: Form Validation (Contact Page)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload

            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert("Please enter a valid email address.");
                return;
            }

            // Simulate successful submission
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Message Sent Successfully! ✓";
            btn.style.background = "#10b981";
            
            contactForm.reset(); // Clear form

            setTimeout(() => {
                btn.innerText = originalText;
            }, 3000);
        });
    }
});