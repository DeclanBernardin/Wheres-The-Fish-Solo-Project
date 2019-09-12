import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Marker, InfoWindow} from '@react-google-maps/api';
import { withRouter } from 'react-router-dom';


class fishingSpotDetails extends Component {

    state={}

    spotDetails = () => {
        this.props.history.push('/spotdetails')
    }

    updateSpotLocation = () => {
        console.log(this.state);
        this.props.dispatch({
            type: 'UPDATE_FISHING_SPOT',
            payload: {
                lat: this.state.lat,
                lng: this.state.lng,
                id: this.state.id
            }
        })
    }

    render(){
        
    let fishingSpots = this.props.reduxStore.spotDetails.map((details, index)=> {
        return (<Marker key= {index} draggable={true} clickable={true} onClick={this.spotDetails} onDragEnd={event => {
            console.log(event.latLng.lat(), event.latLng.lng())
            this.setState({
                ...this.state,
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                id: details.id
            })
            this.updateSpotLocation()
        }} position={{ lat: parseFloat(details.latitude), lng: parseFloat(details.longitude) }}
         ></Marker>)
    })


        return(
            <div>
                {this.props.reduxStore.spotDetails ?  fishingSpots : null }
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};


export default connect(mapStateToProps)(withRouter(fishingSpotDetails));
