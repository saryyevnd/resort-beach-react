import React, { Component } from 'react'
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title.js';




class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const { loading, featuredRooms: rooms, } = this.context;
        return (
            <section className='featured-rooms'>
                <Title title='featured-room' />
                <div className='featured-rooms-center'>
                    {
                        loading
                            ?
                            <Loading />
                            :
                            rooms.map(room => {
                                return <Room
                                    key={room.id}
                                    room={room}
                                />
                            })}
                </div>
                <Loading />
            </section>
        )
    }
}






export default FeaturedRooms;
