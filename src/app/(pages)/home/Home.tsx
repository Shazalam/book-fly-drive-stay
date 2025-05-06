import DialogBox from "@/app/components/dialogBox/dialogBox";
import Car from "./car/Car";
import FlightsIntro from "./flightsIntro/FlightsIntro";
import HeroSection from "./hero-section/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="my-10">
        <Car />
      </div>
      <div className="my-10">
        <FlightsIntro />
      </div>
      <DialogBox />
    </div>
  );
};

export default Home;
