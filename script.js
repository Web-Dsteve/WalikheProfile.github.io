// Time-based greeting
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting;
    
    if (hour < 12) {
        greeting = 'Good morning! Welcome to my profile';
    } else if (hour < 18) {
        greeting = 'Good afternoon! Welcome to my profile';
    } else {
        greeting = 'Good evening! Welcome to my profile';
    }
    
    greetingElement.textContent = greeting;
}

// Read More button functionality
function setupReadMoreButton() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const shortBio = document.getElementById('short-bio');
    const fullBio = document.getElementById('full-bio');
    
    readMoreBtn.addEventListener('click', function() {
        if (fullBio.classList.contains('hidden')) {
            fullBio.classList.remove('hidden');
            shortBio.classList.add('hidden');
            readMoreBtn.textContent = 'Read Less';
        } else {
            fullBio.classList.add('hidden');
            shortBio.classList.remove('hidden');
            readMoreBtn.textContent = 'Read More';
        }
    });
}

// Highlight top skill button
function setupSkillsButton() {
    const skillsBtn = document.getElementById('skills-btn');
    const skillsList = document.querySelectorAll('.skills-list li');
    
    skillsBtn.addEventListener('click', function() {
        // Remove highlight from all skills first
        skillsList.forEach(skill => {
            skill.classList.remove('highlight');
        });
        
        // Highlight the first skill (as an example)
        skillsList[0].classList.add('highlight');
        
        // Show alert
        alert('Top skill highlighted!');
    });
}

function showAlert() {
    alert('Thanks for visiting my profile page!');
}

// Form validation
function setupFormValidation() {
    const contactForm = document.getElementById('contact-form');
    const errorElement = document.getElementById('form-error');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset error message
        errorElement.textContent = '';
        
        // Validate fields
        if (!name || !email) {
            errorElement.textContent = 'Please fill in all required fields';
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorElement.textContent = 'Please enter a valid email address';
            return;
        }
        
        // If validation passes
        alert(`Thank you, ${name}! Your message has been submitted.`);
        contactForm.reset();
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    setupReadMoreButton();
    setupSkillsButton();
    setupFormValidation();
});
