// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;

const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle Form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload


    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value

    const fatherName = (document.getElementById('father') as HTMLInputElement).value

    const email = (document.getElementById('email') as HTMLInputElement).value

    const address = (document.getElementById('address') as HTMLInputElement).value

    const phone = (document.getElementById('phone') as HTMLInputElement).value

    const card = (document.getElementById('card') as HTMLInputElement).value

    const education = (document.getElementById('education') as HTMLInputElement).value

    const experience = (document.getElementById('experience') as HTMLInputElement).value

    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    
    <p><b>Name:</b>${name}</p>

    <p><b>Father Name:</b>${fatherName}</p>

    <p><b>Email:</b>${email}</p>

    <p><b>Address:</b>${address}</p>

    <p><b>Phone:</b>${phone}</p>

    <p><b>card:</b>${card}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //Display the generate resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else{
        console.error('The resume display is missing.')
    }
});