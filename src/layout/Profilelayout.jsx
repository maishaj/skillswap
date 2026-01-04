import React from 'react';
import ToyNavbar from '../components/ToyNavbar';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Loading from '../components/Loading';
import { useNavigation } from 'react-router';

const Profilelayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header>
                <ToyNavbar></ToyNavbar>
            </header>
            <main>
                {
                   state=="loading"?<Loading></Loading>:<Profile></Profile>
                }
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Profilelayout;