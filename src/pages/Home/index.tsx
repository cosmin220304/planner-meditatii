import ExploreSection from "../../components/ExploreSection/ExploreSection";
import FooterSection from "../../components/Footer/FooterSection";
import HeroSection from "../../components/HeroSection/HeroSection";

function Home() {
  return (
    <div className="h-screen w-full">
      <HeroSection/>
      <ExploreSection/>
      <FooterSection/>
    </div>
  )
}

export default Home;
