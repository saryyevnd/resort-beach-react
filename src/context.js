import React, { Component } from 'react'
const RoomContext = React.createContext(null);
// <RoomContext.Provider value={} />
class RoomProvider extends Component {
    state = {

    }
    render() {
        return <RoomContext.Provider value={'Hello World!'}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }