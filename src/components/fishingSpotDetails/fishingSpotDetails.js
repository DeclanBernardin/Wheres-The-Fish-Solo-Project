import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Marker, OverlayView} from '@react-google-maps/api';
import { withRouter } from 'react-router-dom';



class fishingSpotDetails extends Component {

    state={
        toggle: false,
    }

    toEdit = (id) => {
        this.props.history.push(`addspot/${id}`)
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

    changeState = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
        console.log(this.state.toggle);
        
    }

    handleDelete = (id) => {
        console.log(id);
        this.props.dispatch({
            type: 'DELETE_SPOT',
            payload: {id: id}
        })
    }

    render(){
        
    let fishingSpots = this.props.reduxStore.spotDetails.map((details, index)=> {
        return (<Marker key= {index} draggable={true} clickable={true}  onDragEnd={event => {
            console.log(event.latLng.lat(), event.latLng.lng())
            this.setState({
                ...this.state,
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                id: details.id
            })
            this.updateSpotLocation()}} 
            position={{ lat: parseFloat(details.latitude), lng: parseFloat(details.longitude) }}
            onClick={ this.changeState}>
            {this.state.toggle && <OverlayView
                position={{
                    lat: details.latitude,
                    lng: details.longitude
                }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div style={{
                        background: `white`,
                        border: `1px solid #ccc`,
                        padding: 15
                    }}>
                    <h1>{details.spot_name}</h1>
                    <button onClick={() => {this.toEdit(details.id)}} type='button'>Click me</button>
                    <button onClick={() => this.handleDelete(details.id)}>Delete</button>
                </div>
            </OverlayView>}
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
