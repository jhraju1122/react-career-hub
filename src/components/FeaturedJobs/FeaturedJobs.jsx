import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
 

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);
 
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
       <div className='grid grid-cols-2 gap-6'>
       {
            jobs.slice(0, dataLength).map(job =><Job key={job.id} job={job}></Job>)
        }
       </div>
       <div className={ dataLength === jobs.length && hidden}>
        <button onClick={() => setDataLength(jobs.length)} className='btn btn-primary'>Show All Jobs</button>
       </div>
      </div>
             
    );
};

export default FeaturedJobs;