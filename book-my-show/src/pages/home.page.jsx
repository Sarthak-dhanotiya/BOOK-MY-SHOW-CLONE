import React from 'react';
// layout HOC
import defaultlayout from '../layout/default.layout';

import Entertainment from '../components/Entertainment/Entertainment.Card';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';



const homepage=()=>{
    return(
        <div>
            
            home</div>
    )
}

export default defaultlayout(homepage);