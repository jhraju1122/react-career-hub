import { useLoaderData, useParams } from "react-router-dom";

 

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(jobs, id);
    return (
        <div>
            <h2>Job Details of: {job.job_title}</h2>
            <div className="grid md:grid-cols-4">
            <div className="border md:col-span-4"></div>
            <div className="border">
                <h2 className="text-2xl">Side things</h2>
            </div>
            </div>
        </div>
    );
};

export default JobDetails;