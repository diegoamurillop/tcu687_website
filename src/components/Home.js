import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeCount from "./HomeCount";
import HomeWhyUs from "./HomeWhyUs";


function Home() {
    return (
        <div className='home'>
            <HomeHero />
            <HomeAbout />
            <HomeCount /> 
            <HomeWhyUs />
        </div>
    )
}

export default Home;