import { CiLocationOn } from "react-icons/ci";

const Job = ({job}) => {
    const {logo} = job;
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
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Job;