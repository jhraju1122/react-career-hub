import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
      
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div>
        <h2><CiLocationOn></CiLocationOn></h2>
         
      </div> 
    </div>
    <Link to={`/job/${id}`}>
        <button class="btn btn-primary">View Details</button>
        </Link>
  </div>
</div>
    );
};

export default Job;