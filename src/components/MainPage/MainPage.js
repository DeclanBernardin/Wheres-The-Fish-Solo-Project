import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class MainPage extends Component{
  render(){
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 46.392410, lng: -94.636230 }}
      />
    ))
    return(
      <MyMapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      
    );
  }
}



  


export default MainPage;
