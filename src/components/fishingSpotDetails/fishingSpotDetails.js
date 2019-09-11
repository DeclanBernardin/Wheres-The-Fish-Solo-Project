import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Marker, InfoWindow} from '@react-google-maps/api'

class fishingSpotDetails extends Component {

    test = () => {
        alert('test')
    }
    render(){
    let fishingSpots = this.props.reduxStore.spotDetails.map(details => {
        return (<Marker draggable={true} clickable={true} onClick={this.test} position={{ lat: parseFloat(details.latitude), lng: parseFloat(details.longitude) }}
         ></Marker>)
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
