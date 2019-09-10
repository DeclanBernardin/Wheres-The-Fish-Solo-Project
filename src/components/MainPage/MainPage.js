import React, {Component} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import AddButton from '../AddButton/AddButton'
import { connect } from 'react-redux'; 
import FishingSpotDetails from '../fishingSpotDetails/fishingSpotDetails'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MainPage extends Component {
  state={}

  componentDidMount(){
    this.props.dispatch({type: 'GET_FISHING_SPOTS'})
  }
  createSpot = () => {
    console.log(this.state);
    this.props.dispatch({
      type: 'CREATE_FISHING_SPOT',
      payload: {
        lat: this.state.lat,
        lng: this.state.lng
      }
    })
  }

  render() {
   
    return(
      <div>
      <LoadScript id="loadScript" googleMapsApiKey={process.env.REACT_APP_API_KEY} >
        <GoogleMap mapContainerStyle={{ height: "400px", width: "360px" }}
          zoom={5}
          center={{ lat: 46.392410, lng: -94.636230 }}
          onClick={event => {
              console.log(event.latLng.lat(), event.latLng.lng())
                this.setState({
                  ...this.state, 
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                })
                this.createSpot()
            }} >
            
            <FishingSpotDetails/>
        </GoogleMap>
      </LoadScript >
      <AddButton/>
      </div>
    );
  }
}



const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};


export default connect(mapStateToProps)(MainPage);
