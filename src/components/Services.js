import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            services: [
                {
                    id: 1,
                    icon: <FaCocktail />,
                    title: 'Free cocktails',
                    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni , corporis!`
                },
                {
                    id: 2,
                    icon: <FaHiking />,
                    title: 'Endless Hiking',
                    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni , corporis!`
                },
                {
                    id: 3,
                    icon: <FaShuttleVan />,
                    title: 'Free Shuttle',
                    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni , corporis!`
                },
                {
                    id: 4,
                    icon: <FaBeer />,
                    title: 'Free Beer',
                    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni , corporis!`
                }
            ]
        }
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {
                        this.state.services.map(item => {
                            return (
                                <article className='service' key={item.id}>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Services
