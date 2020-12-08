import React, {Component} from 'react';

import './index-page.styles.scss';
import "fontsource-roboto";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const {} = this.state;

        return (
            <div className ='homePage'>
                <div className='bannerImage'>

                    <div className='companyLogo'> </div>

                    <div className='bannerText'> </div>

                    <div className='cta'>
                        <p className='bannerText'>Tailor your weekly menu so you get the most delicious recipes</p>
                        <br></br>
                        <p className='bannerText'>and fresh ingredients delivered to your door.</p>
                        <button className="btn btn-cta">Order now</button>
                    </div>

                </div>

                <div className='featuredRecipes'>

                </div>

                <div className='appBanner'>
                    <div className='phoneImage'> </div>

                    <div className='ctaApp'>
                        <p className='ctaText'>Track your deliveries</p>
                        <br></br>
                        <p className='ctaText'> with our <span className='highLight'>app</span></p>

                    </div>

                    <div className='ctaApp2'>

                        <p className='ctaText2'>Track your deliveries</p>
                        <br></br>
                        <p className='ctaText2'> real time and command from anywhere</p>
                    </div>

                    <div className='google-play'></div>
                    <div className='app-store'></div>




                </div>

                <div className='bottomPart'>
                </div>
            </div>


        );
    }
}

export default HomePage;