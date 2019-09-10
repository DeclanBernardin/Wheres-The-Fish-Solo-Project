import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Marker } from '@react-google-maps/api'

class fishingSpotDetails extends Component {
    render(){
    let fishingSpots = this.props.reduxStore.spotDetails.map(details => {
    return (<Marker position={{ lat: details.latitude, lng: details.longitude }} position ></Marker>)
    })
        return(
            <div>
                {fishingSpots}
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};


export default connect(mapStateToProps)(fishingSpotDetails);
