// Get the form and the "Generate Resume" button
const form = document.getElementById("resume-form");
const generateBtn = document.getElementById("generate-btn");
const resumeContainer = document.getElementById("generated-resume-container");
const resumeDiv = document.getElementById("generated-resume");

// When the form is submitted (on "Generate Resume" click)
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const years = document.getElementById("years").value;
    const degree = document.getElementById("degree").value;
    const school = document.getElementById("school").value;
    const gradYear = document.getElementById("grad-year").value;
    const skills = document.getElementById("skills").value;

    // Create the resume content
    const resumeContent = `
        <h1>Resume of ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h2>Work Experience</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Years of Experience:</strong> ${years}</p>

        <h2>Education</h2>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>School/University:</strong> ${school}</p>
        <p><strong>Graduation Year:</strong> ${gradYear}</p>

        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    // Display the resume in the "generated-resume" section
    resumeDiv.innerHTML = resumeContent;

    // Show the resume container
    resumeContainer.classList.remove("hidden");
});













document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collecting the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const years = document.getElementById("years").value;
    const degree = document.getElementById("degree").value;
    const school = document.getElementById("school").value;
    const gradYear = document.getElementById("grad-year").value;
    const skills = document.getElementById("skills").value;

    // Creating the resume content
    const resumeContent = `
        <h1>Resume of ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h2>Work Experience</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Years of Experience:</strong> ${years}</p>

        <h2>Education</h2>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>School/University:</strong> ${school}</p>
        <p><strong>Graduation Year:</strong> ${gradYear}</p>

        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    // Displaying the resume
    const resumeSection = document.createElement("div");
    resumeSection.classList.add("generated-resume");
    resumeSection.innerHTML = resumeContent;

    // Append the generated resume to the page
    document.body.appendChild(resumeSection);
});
