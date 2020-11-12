import React from 'react'
import LoadingArrow from './../images/gif/loading-arrow.gif'
const Loading = () => {
    return (
        <section className='loading'>
            <h4>Rooms Data Loading...</h4>
            <img src={LoadingArrow} alt='' />
        </section>
    )
}

export default Loading
