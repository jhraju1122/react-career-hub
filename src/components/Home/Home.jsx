import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import CategoryList from '../CategoryLIst/CategoryList';
import Footer from '../Footer/Footer';
 
 
 
 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
              <Footer></Footer>
              
            <h2>This is home</h2>
            
        </div>
    );
};

export default Home;