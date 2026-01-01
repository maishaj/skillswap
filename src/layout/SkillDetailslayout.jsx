import React from 'react';
import ToyNavbar from '../components/ToyNavbar';
import SkillDetails from '../components/SkillDetails';
import Footer from '../components/Footer';
import BookSessionForm from '../components/BookSessionForm';

const SkillDetailslayout = () => {
    return (
        <div>
            <header>
                <ToyNavbar></ToyNavbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <SkillDetails></SkillDetails>
                <BookSessionForm></BookSessionForm>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default SkillDetailslayout;