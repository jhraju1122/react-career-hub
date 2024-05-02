import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
 

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
 
    useEffect (() =>{
   fetch('jobs.json')
   .then(res =>res.json())
   .then(data => setJobs(data));
    }, [])



    return (
      <div>
          <div className='text-center'>
            <h2 className='text-5xl'>Featured jobs: {jobs.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nihil.</p>
        </div>
        {
            jobs.map(job =><Job key={job.id} job={job}></Job>)
        }
      </div>
            
      
    );
};

export default FeaturedJobs;