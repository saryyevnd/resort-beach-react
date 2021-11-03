import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomsContainer from '../components/RoomsContainer'

const Rooms = () => {
    useEffect(()=>{
        document.documentElement.scrollTo(0, 0)
    },[])
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title='our rooms'>
                    <Link to='/' className='btn-primary'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms
