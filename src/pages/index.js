import React from 'react'
import FactSection from '../components/FactSection';
import {facts} from '../components/FactSection/Data';
import Footer from '../components/FooterSection';

const Home = () => {



    return (
        <>
        <FactSection facts = {facts}/>
        <Footer/>
        </>
    )
}

export default Home
