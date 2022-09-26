const formContact = document.getElementById("contact-form");
const formName = document.getElementById("name");
const industry = document.getElementById("industry");
const budget = document.getElementById("budget");
const email = document.getElementById("email");
const project = document.getElementById("project");

formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('sent');
    open(`mailto:obanason90@gmail.com?subject=${formName.value}&body=NAME: ${formName.value}%0D%0AINDUSTRY: ${industry.value}%0D%0APROJECT: ${project.value}%0D%0ABUDGET: ${budget.value}%0D%0AEMAIL: ${email.value}`)
    // console.log(formName.value);
    // console.log(industry.value);
    // console.log(project.value);
    // console.log(budget.value);
    // console.log(email.value);
})

