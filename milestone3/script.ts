const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display')as HTMLDivElement;


form.addEventListener('submit',(event:Event) => {
    event.preventDefault();

    const name = (document.getElementById ('name') as HTMLInputElement).value
    const email = (document.getElementById ('email') as HTMLInputElement).value
    const phone = (document.getElementById ('phone') as HTMLInputElement).value
    const education = (document.getElementById ('education') as HTMLInputElement).value
    const eperience = (document.getElementById ('experience') as HTMLInputElement).value
    const skills = (document.getElementById ('skills') as HTMLInputElement).value

const resumeHTML = `
<h2><b> Resume</b></h2>
    <h3>Personal Information</h3>
     <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    p><b>Phone:</b> ${phone}</p>

    <h3><b>education </b></h3>
   <p>${education}</p>
    
   <h3><b>experience </b></h3>
   <p>${eperience}</p>

   <h3><b>skills </b></h3>
   <p>${skills}</p>
   `;
    
   if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
   }else{
    console.error('The resume display element is missing.');
   }
});


