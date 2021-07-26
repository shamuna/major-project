const JOBS = [
    {
        id: 'j1',
        title: "Software Engineer",
        description: 'Craft robust, beautiful, usable interfaces for our products and our client’s projects. Play an integral role in connecting and collaborating with strategy, design, and backend to create a cohesive and organized final experience. And enthusiastically own getting to the most optimal solution.',
        company: "Dream inc.",
        salaryRange: {
            from: 2000,
            to: 3000,
        },
        location: "Hyderabad",
        employmentType: "full-time", // full-time, part-time
        workingFrom: "remote", // office, remote
        createdDate: Date.now().toString(),
    },
    {
        id: 'j2',
        title: "teacher",
        description:'Creates and delivers engaging lessons to diverse groups of students at all levels.',
        company: "therur",
        salaryRange:{
            from:2000,
            to :3000,
        },
        location:"kerala",
        employmentType:"full-time",
        workingFrom:"remote",
        createdDate: Date.now().toString(),
    },
]

const findJob = document.getElementById("findjob")
const title = document.getElementById("title")
const city = document.getElementById("city")
let i = 0;
const container = document.getElementById('jobcontainer');


findJob.addEventListener("click", () =>{
    container.innerHTML = ""
   
    if (title.value.toLowerCase() === JOBS[i].title.toLowerCase()&&city.value.toLowerCase()===JOBS[i].location.toLowerCase() ){
       
        const divForItem = document.createElement("div");
        divForItem.innerHTML = `<h3>${JOBS[i].title}</h3>
        <p>${JOBS[i].description}</p>
        <p>${JOBS[i].salaryRange.from}$ - ${JOBS[i].salaryRange.to}$</p>
        <p>${JOBS[i].createdDate}</p> `
        container.appendChild(divForItem)

        title.value = ""
        city.value = ""
    }

    else{i++}

   
})

 const createJob = (title, description, company, salaryFrom, salaryTo, location, employmentType, workingFrom) => {
    JOBS.push({
         id: `j${JOBS.length + 1}`,
        title: title, 
       description: description,
        company: company,
        salaryRange: {
           from: salaryFrom,
           to: salaryTo,
       },
         location: location,
         employmentType: employmentType,
        workingFrom:workingFrom,
        createdDate: Date.now().toString(),
   })
 }
// console.log (JOBS)

//  const renderOneJob = (job) => {
//     const newJobElement = document.createElement('div');
//     newJobElement.classList.add('job-item');
//      newJobElement.innerHTML = `
//         <h3>${job.title}</h3>
//          <p>${job.description}</p>
//          <p>${job.salaryRange.from}$ - ${job.salaryRange.to}$</p>
//          <p>${job.createdDate}</p>
//      `

    // const container = document.getElementById('jobcontainer');
    // container.appendChild(newJobElement);
 
// const renderJobs = () => {

//     // Remove previously rendered job items, so that we can rerender the whole array again
//     const container = document.getElementById('jobs-container');
//     container.innerHTML = ''

//     let i = 0;

//     while (i < JOBS.length) {
//         renderOneJob(JOBS[i])
//         i++;
//     }
// }



// //  renderJobs();

const postJobButton = document.getElementById("postjobbutton");

postJobButton.addEventListener('click', () => {
     // Collect this data from user inputs
       
    const newtitle = document.getElementById("inputtitle").value

   const description = document.getElementById("inputDescription").value
     const company = document.getElementById("inputcompany").value
    const salaryFrom = document.getElementById("inputsalaryf").value
     const salaryTo = document.getElementById("inputsalaryto").value
    const location = document.getElementById("inputlocation").value
     const employmentType = document.getElementById("inputemploymenttype").value
    const workingFrom = document.getElementById("inputworkingfrom").value

   createJob(newtitle, description, company, salaryFrom, salaryTo, location, employmentType, workingFrom )
    
 
     console.log('JOBS =', JOBS)
 })

  