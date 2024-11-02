// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('father').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var card = document.getElementById('card').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    \n    <p><b>Name:</b>".concat(name, "</p>\n\n    <p><b>Father Name:</b>").concat(fatherName, "</p>\n\n    <p><b>Email:</b>").concat(email, "</p>\n\n    <p><b>Address:</b>").concat(address, "</p>\n\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <p><b>card:</b>").concat(card, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing.');
    }
});
