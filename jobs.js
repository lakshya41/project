// jobs.js - Handles Job Posting, Fetching and Display

// Save job to localStorage
function saveJob(job) {
  let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  jobs.push(job);
  localStorage.setItem('jobs', JSON.stringify(jobs));
}

// Get all jobs from localStorage
function getJobs() {
  return JSON.parse(localStorage.getItem('jobs')) || [];
}

// Display jobs in a given container element
function displayJobs(containerId, filter = {}) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const jobs = getJobs();

  const filteredJobs = jobs.filter(job => {
    for (let key in filter) {
      if (filter[key] && job[key] && !job[key].toLowerCase().includes(filter[key].toLowerCase())) {
        return false;
      }
    }
    return true;
  });

  if (filteredJobs.length === 0) {
    container.innerHTML = '<p>No jobs found.</p>';
    return;
  }

  filteredJobs.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.classList.add('job-card');
    jobDiv.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p><strong>Description:</strong> ${job.description}</p>
      <p><strong>Requirements:</strong> ${job.requirements}</p>
      <button onclick="applyToJob('${job.title}', '${job.company}')">Apply</button>
    `;
    container.appendChild(jobDiv);
  });
}

// Apply to a job (store applied job in user profile or show alert)
function applyToJob(title, company) {
  alert(`Application submitted for ${title} at ${company}`);
  // Extend to store in applied jobs list per user
}
{
    const job = {
  title: 'Frontend Developer',
  company: 'TechCorp',
  location: 'Delhi',         // ← Place name here
  salary: '50000',
  description: 'Build UI...',
  requirements: 'HTML, CSS'
};
}

// Optionally export for module systems
// export { saveJob, getJobs, displayJobs, applyToJob };