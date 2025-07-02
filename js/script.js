// DECLARING VARIABLES 
// access the form and inputs 
let fm = document.getElementById('contact-form');
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let msg = document.getElementById('message');
let btn = document.getElementById('submit-button');
const feedbackDiv = document.getElementById('feedback');

// Declare variable that stores regular expression for email
const emRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
// define event-handler
function handleForm() {
    
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // define containers for user-input/errors
    let ui = {};
    let errors = [];

    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // validate full name:
    if (fn.value.trim() !== '') {
        // save that value in ui
        ui.fullName = fn.value.trim();
    } else {
        // create corresponding error message and push it in the errors array
        errors.push('Full name is missing');
    }

    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
    if (em.value.trim() !== '') {
        // Check if email is valid.
        if (emRegex.test(em.value.trim())) {
            // Pass the collected value to your object "ui".
            ui.email = em.value.trim();
        } else {
            // Create a corresponding error-message and add it to your array "errors".
            errors.push('Email format is invalid');
        }
    } else {
        // Create a corresponding error-message and add it to your array "errors"
        errors.push('Email is missing');
    }

    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    if (msg.value.trim() !== '') {
        // Pass the collected value to your object "ui".
        ui.message = msg.value.trim();
    } else {
        // Create a corresponding error-message and add it to your array "errors"
        errors.push('Message is missing');
    }

    
    // ___________________________________________________________________

            // +-----------------+
            // | CONSOLE OUTPUT  |
            // +-----------------+
            if (errors.length > 0) {
                console.log('ERRORS', errors);
            } else {
                console.log('COLLECTED DATA', ui);
            }
    // ___________________________________________________________________


    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
    if (errors.length > 0) {
        // Print errors in the html tag created for that purpose below the form.
        let errorHTML = '';
        errors.forEach(error => {
            errorHTML += `${error}<br>`;
        });
        feedbackDiv.innerHTML = errorHTML;
        feedbackDiv.className = 'error';
        feedbackDiv.style.display = 'block';
    } else {
        // Print a thank you message and show collected data
        feedbackDiv.innerHTML = `Thank you for the form submission!<br>
            Name: ${ui.fullName}<br>
            Email: ${ui.email}<br>
            Message: ${ui.message}`;
        feedbackDiv.className = 'success';
        feedbackDiv.style.display = 'block';
        
        // Clear text-fields
        fn.value = '';
        em.value = '';
        msg.value = '';
    }
}

// define event target object
btn.addEventListener('click', handleForm);
