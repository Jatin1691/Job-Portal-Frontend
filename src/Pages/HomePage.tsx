import DreamJob from "../LandingPage/DreamJob";
import Header from "../Header/Header";
import Companies from "../LandingPage/Companiespage";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Footer from "../LandingPage/Footer";

const Home=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
          
          <DreamJob/>
          <Companies/>
          <JobCategory/>
          <Subscribe/>
       
       </div>
    )
}

export default Home;