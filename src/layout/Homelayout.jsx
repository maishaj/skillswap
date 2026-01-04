import React, { useState } from 'react';
import ToyNavbar from '../components/ToyNavbar';
import Slider from '../components/Slider';
import ToyCard from '../components/ToyCard';
import ToyCarAndVehicles from '../components/ToyCarAndVehicles';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import NewsLetter from '../components/NewsLetter';
import { useNavigation } from 'react-router';
import Loading from '../components/Loading';



const Homelayout = () => {

    const [loading]=useState([]);

    const {state}=useNavigation();

    return (
        <div>
            <header>
               <ToyNavbar></ToyNavbar>
            </header>
            <main>
                {
                state=="loading"? <Loading></Loading> 
                :
                <section>
                    <Slider></Slider>
                    <ToyCard></ToyCard>
                    <ToyCarAndVehicles></ToyCarAndVehicles>
                    <HowItWorks></HowItWorks>
                      <NewsLetter></NewsLetter>
                </section>
               }  
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;