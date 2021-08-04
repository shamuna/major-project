const JOBS = [
    {
        id: 'j1',
        title: "Software Engineer",
        description: "Craft robust, beautiful, usable interfaces for our products and our client's projects. ",
        company: "Dream inc.",
        salaryRange: {
            from: 2000,
            to: 3000,
        },
        location: "Hyderabad",
        employmentType: "full-time", // full-time, part-time
        workingFrom: "remote", // office, remote
        createdDate: new Date().toUTCString(),
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
        location:"Kerala",
        employmentType:"full-time",
        workingFrom:"remote",
        createdDate:new Date().toUTCString(),
    },
]


const renderOneJob = (job) => {
        const divForItem = document.createElement("div");
        divForItem.style.backgroundColor="#0275d8"
        divForItem.style.width="300px"
        divForItem.style.height="350px"
        divForItem.style.marginRight="10px"
        divForItem.style.borderRadius="30px"
        divForItem.style.padding="10px"
        divForItem.innerHTML = `<h3>${job.title}</h3>
        <p>${job.description}</p>
        <p>${job.salaryRange.from}$ - ${job.salaryRange.to}$</p>
        <p>${job.createdDate}</p> `
        const container = document.getElementById('jobcontainer');
        container.appendChild(divForItem)
}
const renderJobs = (matchedJobs) => {
    // Remove previously rendered job items, so that we can rerender the whole array again
    const container = document.getElementById('jobcontainer');
    container.innerHTML = ''
    let i = 0;
    while (i < matchedJobs.length) {
        renderOneJob(matchedJobs[i])
        i++;
    }
}
const findJob = document.getElementById("findjob")
findJob.addEventListener("click", () => {
    const cityInput = document.getElementById("city")
    let matchedJobs = [];
    let i = 0;
    while (i < JOBS.length) {
        if (JOBS[i].location.substring(0, cityInput.value.length).toLowerCase()=== cityInput.value.toLowerCase()) {
            matchedJobs.push(JOBS[i])
        }
        i++;
    }

    renderJobs(matchedJobs);
    cityInput.value = ''
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
        createdDate: new Date().toUTCString(),
   })
 }
 // TODO: Create a modal
 const postJobButton = document.getElementById("postjobbutton");
postJobButton.addEventListener('click', () => {
    postjobdatas = document.getElementById('postjobdatas')
    postjobdatas.style.display="block"})
    const createbutton = document.getElementById("createjobbutton")
createbutton .addEventListener('click', () => {
    postjobdatas.style.display="none"
   const newtitle = document.getElementById("title").value
  const description = document.getElementById("floatingTextarea2").value
 
  const company = document.getElementById("company").value
const salaryFrom = document.getElementById("fromsal").value
 const salaryTo = document.getElementById("tosal").value
 const location = document.getElementById("Location").value
  const employmentType = document.getElementById("emtype").value
  const workingFrom = document.getElementById("workfrom").value
 createJob(newtitle, description, company, salaryFrom, salaryTo, location, employmentType, workingFrom )
 
    
    console.log('JOBS =', JOBS)
 })