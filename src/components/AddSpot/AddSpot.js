import React, {Component} from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AddSpot extends Component {
  render(){
    return(
      <div>
        <div>
        <input placeholder="Name The Spot!"></input>
        </div>
        <div>
        <input placeholder="Pictures!"></input>
        </div>
        <div>
        <input placeholder="Weather"></input>
        </div>
        <div>
        <input placeholder="Time Of Year"></input>
        </div>
        <div>
        <input placeholder="Lure Used"></input>
        </div>
        <div>
        <input placeholder="Type Of Fishing"></input>
        </div>
        <div>
        <input placeholder="Water Depth"></input>
        </div>
        <button>Cancel</button>
        <button>Create!</button>
      </div>
    )
  }
}

export default AddSpot;
