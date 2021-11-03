import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import FeaturedRooms from '../components/FeaturedRooms';
import Hero from '../components/Hero';
import Services from '../components/Services';
const Home = () => {
    useEffect(()=>{
        document.documentElement.scrollTo(0, 0)
    },[])
    return (
        <>
            <Hero>
                <Banner
                    title='luxurious rooms'
                    subtitle='deluxe rooms starting at $299'
                >
                    <Link to='/rooms/' className='btn-primary'>
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home
