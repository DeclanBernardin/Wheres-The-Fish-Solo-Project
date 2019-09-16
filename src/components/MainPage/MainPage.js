import React, {Component} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { connect } from 'react-redux'; 
import FishingSpotDetails from '../fishingSpotDetails/fishingSpotDetails'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MainPage extends Component {
  state={
    map: {},
    mainCenter: {lat:46 , lng:-96 },
  }

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

  changeCenter = () => {
    this.setState({
      mainCenter: {lat: this.state.map.getCenter().lat(),
      lng: this.state.map.getCenter().lng()}
    })
  }

  render() {
   
    return(
      <div>
      <LoadScript id="loadScript" googleMapsApiKey={process.env.REACT_APP_API_KEY} >
        <GoogleMap mapContainerStyle={{ height: "515px", width: "360px" }}
          zoom={5}
          
          center={{lat: this.state.mainCenter.lat, lng: this.state.mainCenter.lng }}
          onDragEnd={this.changeCenter}
          onDblClick={event => {
              console.log(event.latLng.lat(), event.latLng.lng())
                this.setState({
                  ...this.state, 
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                })
                this.createSpot()
            }} 
            onLoad={map => this.setState({
              ...this.state, 
              map: map,
            })}>
            
            <FishingSpotDetails/>
        </GoogleMap>
      </LoadScript >
      
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
