import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';



const RoomsContainer = ({ context }) => {
    const { loading, sortedRooms, rooms } = context
    return loading
        ? <Loading />
        : (
            <>
                <RoomsFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} />
            </>
        )
}

export default withRoomConsumer(RoomsContainer)