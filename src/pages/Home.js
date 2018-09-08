import React from 'react';

import {
    LandingSection,
    PitchSection,
    CategorySection,
    StoriesSection,
    Banner
} from '../components/home';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LandingSection />
                <PitchSection />
                <CategorySection />
                <StoriesSection />
                <Banner />
            </React.Fragment>
        );
    }
}

export default Home;