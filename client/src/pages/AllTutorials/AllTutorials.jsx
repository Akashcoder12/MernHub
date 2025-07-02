import React from 'react'
import './AllTutorial.css';

const tutorials=[
   
  {
    id:1,
    title:"ReactJS Basics",
    Description:"Learn how to build your first ReactJS component,JSX, and hooks.",
    video_url:"https://youtu.be/SqcY0GlETPk?si=rv1XjSNggkqi1OhP",
    author:"Akash Gupta"
  },
  {
    id:2,
    title:"Node.js & Express Crash Course",
    Description:"A fast-track guide to building backend APIs using Node.js and Express.",
    video_url:"https://youtu.be/PCcMF1xTQO0?si=Ge-VN18hFP3EPGV4",
    author:"Rohit Sharma"
  },
  {
    id:3,
    title:'MySQL for beginners',
    Description:"Learn how to structure and query relational databases using MySQL",
    video_url:"https://youtu.be/hlGoQC332VM?si=2BcwApU3CuLair0P",
    author:"Sneha Yadav"
  }

];

export default function AllTutorials() {
  return (
    <div className='tt-cardList'>
      <h2>tutorials</h2>
      {
        tutorials.map((item,index)=>{
            return <div key={index} className='tt-cards'> 
                <a href={item.video_url} target='_blank' rel="noreferrer">  ▶️ watch video</a>
                <h3 id='title'>{item.title}</h3>
                <p id='description'>{item.Description}</p>
                <p id='author'>{item.author}</p>  
            </div>
        })
      }
    </div>
  )
}
