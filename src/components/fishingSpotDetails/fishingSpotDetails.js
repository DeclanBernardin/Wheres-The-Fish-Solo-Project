import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Marker } from '@react-google-maps/api';
import { withRouter } from 'react-router-dom';
import Overlay from '../Overlay/Overlay'


class fishingSpotDetails extends Component {

    state={
        toggle: false,
    }

    // on drag end it changes the location of the marker and saves it to the database
    updateSpotLocation = () => {
        console.log(this.state);
        this.props.dispatch({
            type: 'UPDATE_FISHING_SPOT',
            payload: {
                lat: this.state.lat,
                lng: this.state.lng,
                id: this.state.id,
                userid: this.state.user_Id
            }
        })
    }

    // gets that specific id so only one drop down is displayed at a time
    changeState = (id) => {
        this.setState({
            ...this.state,
            overlayId: id
        })
        console.log(id);
        if (this.state.overlayId === this.props.reduxStore.overlayReducer.id){
            this.props.dispatch({
                type: 'CLEAR_REDUCER'
            })
        } else {
            this.props.dispatch({
                type: 'GETTING_AN_ID',
                payload: { id: id }
            })
            
        }
    }

   

    render(){
        
    let fishingSpots = this.props.reduxStore.spotDetails.map((details, index)=> {
        return (<Marker key= {index} draggable={true} clickable={true}  onDragEnd={event => {
            console.log(event.latLng.lat(), event.latLng.lng())
            this.setState({
                ...this.state,
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                id: details.id, 
                user_Id: details.user_id
            })
            this.updateSpotLocation()}} 
            position={{ lat: parseFloat(details.latitude), lng: parseFloat(details.longitude) }}
            onClick={() => this.changeState(details.id)}>
            {this.props.reduxStore.overlayReducer.id && (<Overlay details = {details}/>)}
            </Marker>)
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
