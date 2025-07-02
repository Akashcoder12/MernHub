import React from 'react'
import './Blogs.css';

  const blogs = [
    {
      id: 1,
      title: "Why MERN Stack is Perfect for Startups 🚀",
      author: "Akash Gupta",
      summary: "Learn how MongoDB, Express, React, and Node work together to build fast, scalable applications and why startups love it.",
      link: "https://medium.com/@akash/mern-stack-startups"
    },
    {
      id: 2,
      title: "10 Project Ideas to Master React ⚛️",
      author: "Riya Verma",
      summary: "Start with simple apps and move to advanced projects to solidify your React knowledge through real practice.",
      link: "https://dev.to/riya/10-react-projects"
    },
    {
      id: 3,
      title: "From Beginner to Backend Hero with Node.js",
      author: "Siddharth Roy",
      summary: "Discover how to build secure and powerful APIs using Express and Node.js — even if you're just starting out.",
      link: "https://hashnode.com/node-backend-hero"
    }
  ];

export default function AddTutorials() {
  return(
    <div className='blogList'>
       <h2>Web Dev & MERN Blogs</h2>
       {
         blogs.map((item,index)=>{
           return <div key={index} className='blog-card'>
               <h3 id='b-title'>{item.title}</h3>
               <p id='b-author'>{item.author}</p>
               <p id='b-summary'>{item.summary}</p>
               <a href={item.link}>Read More</a>
           </div>
         })
       }
    </div>
  )
}
