
import Banner from "../../pages/Banner/Banner";
import Category from "../../pages/Category/Category";
import GalaryPage from "../../pages/GalaryPage/GalaryPage";
import KidsCarSection from "../../pages/KidsCarSection/KidsCarSection";
import KidsFeature from "../../pages/KidsFeatures/KidsFeature";
// import GalaryPage from "../../pages/GalaryPage/GalaryPage";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <GalaryPage></GalaryPage>
            <div className="my-4">
                <KidsCarSection></KidsCarSection>
            </div>
            <KidsFeature></KidsFeature>

        </div>
    );
};

export default Home;