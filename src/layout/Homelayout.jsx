import React from 'react';
import ToyNavbar from '../components/ToyNavbar';
import Slider from '../components/Slider';
import ToyCard from '../components/ToyCard';
import ToyCarAndVehicles from '../components/ToyCarAndVehicles';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import NewsLetter from '../components/NewsLetter';



const Homelayout = () => {
    return (
        <div>
            <header>
               <ToyNavbar></ToyNavbar>
            </header>
            <main>
                <section>
                    <Slider></Slider>
                </section>
                <section>
                    <ToyCard></ToyCard>
                </section>
                <section>
                    <ToyCarAndVehicles></ToyCarAndVehicles>
                </section>
                <section>
                    <HowItWorks></HowItWorks>
                </section>
                <section>
                    <NewsLetter></NewsLetter>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;