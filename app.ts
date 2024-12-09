// Get form elements
const resumeform = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const companyInput = document.getElementById('company') as HTMLInputElement;
const roleInput = document.getElementById('role') as HTMLInputElement;
const yearsInput = document.getElementById('years') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const schoolInput = document.getElementById('school') as HTMLInputElement;
const gradYearInput = document.getElementById('grad-year') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

// TypeScript Interface for resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    company: string;
    role: string;
    years: string;
    degree: string;
    school: string;
    gradYear: string;
    skills: string;
}

// Handle form submit
const handleFormSubmit = (event: Event) => {
    event.preventDefault();

    // Get form data
    const resumeData: ResumeData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        company: companyInput.value,
        role: roleInput.value,
        years: yearsInput.value,
        degree: degreeInput.value,
        school: schoolInput.value,
        gradYear: gradYearInput.value,
        skills: skillsInput.value
    };

    // Generate resume HTML and display it
    generateResume(resumeData);
};

// Generate resume content
const generateResume = (data: ResumeData) => {
    const resumePage = `
        <div class="resume-container">
            <h1>${data.name}</h1>
            <p>Email: ${data.email} | Phone: ${data.phone}</p>
            <h2>Work Experience</h2>
            <p><strong>Company:</strong> ${data.company} | <strong>Role:</strong> ${data.role} | <strong>Years:</strong> ${data.years}</p>
            <h2>Education</h2>
            <p><strong>Degree:</strong> ${data.degree} | <strong>School:</strong> ${data.school} | <strong>Graduation Year:</strong> ${data.gradYear}</p>
            <h2>Skills</h2>
            <p>${data.skills}</p>
        </div>
    `;
    // Open the resume page
    const newWindow = window.open('', '', 'width=800, height=600');
    newWindow?.document.write(resumePage);
    newWindow?.document.close();
};

// Add submit event listener to form
resumeform?.addEventListener('submit', handleFormSubmit);
