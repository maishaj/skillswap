import React from 'react';
import ToyNavbar from '../components/ToyNavbar';
import ForgotPassword from '../components/ForgotPassword';
import Footer from '../components/Footer';

const ForgotPasswordLayout = () => {
    return (
        <div>
            <header>
                <ToyNavbar></ToyNavbar>
            </header>
            <main>
                <ForgotPassword></ForgotPassword>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default ForgotPasswordLayout;