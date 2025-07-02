import React from 'react'
import './AllJobs.css'

const jobs = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "TechNova Pvt. Ltd.",
      location: "Remote",
      job_type: "Internship",
      description: "Looking for a MERN stack intern to build our internal dashboard.",
      posted_by: "Rohit Mehta"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "CodeCraft",
      location: "Bangalore",
      job_type: "Full-time",
      description: "We need a ReactJS developer with at least 1 year experience.",
      posted_by: "Anjali Kumari"
    },
    {
      id: 3,
      title: "Backend Developer - Node.js",
      company: "StackHive",
      location: "Hyderabad",
      job_type: "Part-time",
      description: "Part-time Node.js API development work, experience with MySQL preferred.",
      posted_by: "Vikram Joshi"
    }
  ];

export default function AllJobs() {   
  return (
    <div className='jobList'>
      <h2>Job & Internship Listings.</h2>
      {
        jobs.map((item,index)=>{
            return <div  key={index} className='job-card'>
                <h3 id='j-title'>{item.title}</h3>
                <p id='j-company'>{item.company}</p>
                <p id='j-location'>{item.location}</p>
                <p id='j-job_type'>{item.job_type}</p>
                <p id='j-description'>{item.description}</p>
                <p id='j-posted_by'>{item.posted_by}</p>
            </div>
        })
      }
    </div>
  )
}
