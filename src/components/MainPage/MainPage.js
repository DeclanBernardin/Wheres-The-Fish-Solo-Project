import React, {Component} from 'react';

import { compose, withProps } from 'recompose';
import { GoogleMap, LoadScript } from '@react-google-maps/api'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class InfoPage extends Component {

 
  
    

  render() {
    // const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    //   <GoogleMap
    //     defaultZoom={8}
    //     defaultCenter={{ lat: -34.397, lng: 150.644 }}
    //   >
    //     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    //   </GoogleMap>
    // ))
    return(
      
      
       
     
    
  
     
    
    );
  }
}


export default InfoPage;
