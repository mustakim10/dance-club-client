import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Xtra from "../Xtra/Xtra";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Xtra></Xtra>
        </div>
    );
};

export default Home;