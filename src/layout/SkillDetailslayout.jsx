import React from 'react';
import ToyNavbar from '../components/ToyNavbar';
import SkillDetails from '../components/SkillDetails';
import Footer from '../components/Footer';
import BookSessionForm from '../components/BookSessionForm';
import { useNavigation } from 'react-router';
import Loading from '../components/Loading';

const SkillDetailslayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header>
                <ToyNavbar></ToyNavbar>
            </header>
            <main className='w-11/12 mx-auto'>
            {
                state=="loading"? <Loading></Loading>:
                <section>
                      <SkillDetails></SkillDetails>
                      <BookSessionForm></BookSessionForm>
                </section>
            }
            </main>
            <Footer></Footer>
        </div>
    );
};

export default SkillDetailslayout;