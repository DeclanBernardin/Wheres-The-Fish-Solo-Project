import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Marker, InfoWindow} from '@react-google-maps/api';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


class fishingSpotDetails extends Component {

    state={}

    test = () => {
        alert('test')
    }

    updateSpotLocation = () => {
        console.log(this.state);
        this.props.dispatch({
            type: 'UPDATE_FISHING_SPOT',
            payload: {
                lat: this.state.lat,
                lng: this.state.lng
            }
        })
    }

    render(){

    let fishingSpots = this.props.reduxStore.spotDetails.map((details, index)=> {
        return (<Marker key= {index} draggable={true} clickable={true} onClick={this.test} onDragEnd={event => {
            console.log(event.latLng.lat(), event.latLng.lng())
            this.setState({
                ...this.state,
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            })
            this.updateSpotLocation()
        }} position={{ lat: parseFloat(details.latitude), lng: parseFloat(details.longitude) }}
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
