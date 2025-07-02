import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
     <div className="hero">
        <h2>Welcome to <span>M</span>ERNHub:</h2>
        <p>A plateform for developers to Learn MERN stack ,share 
        tutorials, and explore job & internship opportunities in web development.
        </p>

       <div>
         <Link to='/register'>
           <button className='btn'>Join Now</button>
         </Link>
         <Link to='/tutorials'>
            <button className='btn'>Explore Tutorials</button>
         </Link>
         <Link to='/jobs'>
            <button className='btn'>View Jobs</button>
         </Link>
       </div> 
     </div>

      
      <section id="mern">
        <h2>Why MERNHub?</h2>
        <ul>
          <li>&#x2705;Share your MERN stack knowledge</li>
          <li>&#x2705;Build a web dev portfolio</li>
          <li>&#x2705;Find and post real opportunities</li>
          <li>&#x2705;Grow your network and visibility</li>
        </ul>
      </section>
    </div>
  )
}
