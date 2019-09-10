import React, {Component} from 'react'
import { compose, withProps } from 'recompose';
import { GoogleMap, LoadScript, Marker, DrawingManager, Data } from '@react-google-maps/api'
import AddButton from '../AddButton/AddButton'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MainPage extends Component {
  render() {
    return(
      <div>
      <LoadScript id="loadScript" googleMapsApiKey={process.env.REACT_APP_API_KEY} >
        <GoogleMap mapContainerStyle={{ height: "400px", width: "360px" }}
          zoom={5}
          center={{ lat: 46.392410, lng: -94.636230 }}
        >
            <Data
              onLoad={data => {
                console.log('data: ', data)
              }}
              options={{
                controlPosition: "TOP_LEFT",
                controls: ["Point"],
                drawingMode: "Marker", //  "LineString" or "Polygon".
                
              }}
            />
            
        </GoogleMap>
      </LoadScript >
      <AddButton/>
      </div>
    );
  }
}



  


export default MainPage;
