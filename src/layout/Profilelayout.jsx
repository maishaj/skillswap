import React from 'react';
import ToyNavbar from '../components/ToyNavbar';
import Footer from '../components/Footer';
import Profile from '../components/Profile';

const Profilelayout = () => {
    return (
        <div>
            <header>
                <ToyNavbar></ToyNavbar>
            </header>
            <main>
                <Profile></Profile>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Profilelayout;