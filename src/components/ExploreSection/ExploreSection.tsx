import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import ProfCard from "../ProfCard/ProfCard";
import activeProfs from 'G:/MeditatiiApp/planner-meditatii/src/services/active-proffesors.json';
import Button from "../Button";

export default function ExploreSection() 
{
    return (
        <section className="realtive h-fit pb-20 my-20">
            <h1 className="text-sky-500 font-bold pb-14 text-4xl pl-10 p-5 md:pl-32 m-auto justify-center md:m-0">Explore active proffesors</h1>
                <div className="m-auto justify-center relative">
                    <AliceCarousel disableDotsControls={true} disableButtonsControls={true} autoPlay={true} infinite={true} autoPlayInterval={1200}  controlsStrategy="responsive" paddingLeft={100} responsive={
                        {
                            1100: {
                                items: 4,
                                itemsFit: 'contain'
                        },
                        800:{
                            items: 3,
                            itemsFit: 'contain'
                        },
                        600:{
                            items: 2,
                            itemsFit: 'contain'
                        },
                        400:{
                            items: 1,
                            itemsFit: 'contain'
                        }
                    }}
                    keyboardNavigation={true} mouseTracking items={activeProfs.map(prof=>
                        <ProfCard key={prof.id} rating={prof.rating} name={prof.name} profession={prof.proffesion} url={prof.url}/>
                        )}/>
                </div>
                <div className="flex relative justify-center pt-8">
                    <Button name="Explore"></Button>
                </div>
        </section>
    )
}   