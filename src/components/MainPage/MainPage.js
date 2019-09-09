import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class InfoPage extends Component {

 
    // < MyMapComponent  
    // isMarkerShown 
    // googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    // loadingElement = {<div style = {{ height: `100%` }} />}
    // containerElement = {<div style = {{ height: `400px` }} />}
    // mapElement = {<div style = {{ height: `100%` }} />}
    // />// Map with a Marker
    // <MyMapComponent isMarkerShown={false} />// Just only Ma
    

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    ))
    return(
      
      <div>
        <h1>main page!</h1>
        < MyMapComponent
    isMarkerShown
    googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement = {<div style = {{ height: `100%` }} />}
    containerElement = {<div style = {{ height: `400px` }} />}
    mapElement = {<div style = {{ height: `100%` }} />}
    />
    <button>Add</button>{/* want to add a seperate component for this buttons */}
    <button>Delete</button>
      </div>
    );
  }
}


export default InfoPage;
