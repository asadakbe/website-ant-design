import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature'
import AppWorks from '../components/home/works';
import AppFaq from '../components/home/faq';
import AppPrice from '../components/home/pricing';
import AppContact from '../components/home/contact';


const AppHome = () => {
    return(
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFaq />
            <AppPrice />
            <AppContact />
        </div>
    )
}

export default AppHome