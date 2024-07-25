
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Get form elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const course = document.getElementById('course');
        const start = document.getElementById('start');
        const message = document.getElementById('message');
        
        // Custom validation messages
        if (!name.value) {
            alert('Name is required.');
            name.focus();
            event.preventDefault();
            return false;
        }
        
        if (!email.value) {
            alert('Email is required.');
            email.focus();
            event.preventDefault();
            return false;
        }
        
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone.value)) {
            alert('Please enter a valid 10-digit phone number.');
            phone.focus();
            event.preventDefault();
            return false;
        }
        
        if (!course.value) {
            alert('Course name is required.');
            course.focus();
            event.preventDefault();
            return false;
        }
        
        if (!start.value) {
            alert('Please select when you plan to start training.');
            start.focus();
            event.preventDefault();
            return false;
        }
        
        if (message.value && message.value.length < 10) {
            alert('Message should be at least 10 characters long.');
            message.focus();
            event.preventDefault();
            return false;
        }
        
        // Form is valid
        alert('Form submitted successfully!');
    });


    // Courses page
   
    
   