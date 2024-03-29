import ExploreSection from "@components/ExploreSection/ExploreSection";
import FooterSection from "@components/Footer/FooterSection";
import HeroSection from "@components/HeroSection/HeroSection";
import Topnav from "@features/topnav";
import Description from "@components/Description";

function Home() {
  return (
    <div>
      <Topnav />
      <HeroSection/>
      <Description />
      <ExploreSection/>
      <FooterSection/>
    </div>
  )
}
export default Home;