import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AddSpot extends Component {
  
state={}

componentDidMount(){
  this.fetchDetails()
}

fetchDetails = (id) => {
 console.log(this.props.match.params.id);
this.props.dispatch({
  type: 'GET_STUFF',
  payload: this.props.match.params.id
})
}  
cancel = () => {
  this.props.history.push('/Mainpage')
}
addDetails = (id) => {
console.log(this.state);
console.log(this.props.match.params.id);
this.setState({
  ...this.state, 
  id: this.props.match.params.id
})
  this.props.dispatch({
    type: 'ADD_DETAILS_TO_SPOT',
    payload: this.state
  })
}



  render(){
    return(
      <div>
        <div>
          <p>{this.state.name}</p>
          <input placeholder="Name The Spot!" onChange= {
          this.spotName = (event) => {
            this.setState({
              ...this.state,
              name: event.target.value
            })

          }
          }></input>
        </div>
        <div>
          <p>{this.state.fishCaught}</p>
          <input placeholder="Type of fish caught here" onChange={
            this.spotFish = (event) => {
              this.setState({
                ...this.state,
                fishCaught: event.target.value
              })

            }
          }></input>
        </div>
        <div>
          <img src ={this.state.pictures} alt= 'fish pictures'></img>
          <input placeholder="Pictures!" onChange={
          this.pictures = (event) => {
            this.setState({
              ...this.state,
              pictures: event.target.value
            })

          }
          }></input>
        </div>
        <div>
          <p>{this.state.weather}</p>
          <input placeholder="Weather" onChange={
          this.weather = (event) => {
            this.setState({
              ...this.state,
              weather: event.target.value
            })

          }
          }></input>
        </div>
        <div>
          <p>{this.state.timeOfYear}</p>
          <input placeholder="Time Of Year" onChange={
          this.timeOfYear = (event) => {
            this.setState({
              ...this.state,
              timeOfYear: event.target.value
            })

          }
          }></input>
        </div>
        <div>
          <p>{this.state.lure}</p>
          <input placeholder="Lure Used" onChange={
          this.lure = (event) => {
            this.setState({
              ...this.state,
              lure: event.target.value
            })

          }
          }></input>
        </div>
        <div>
          <p>{this.state.typeOfFishing}</p>
          <input placeholder="Type Of Fishing" onChange={
          this.typeOfFishing = (event) => {
            this.setState({
              ...this.state,
              typeOfFishing: event.target.value
            })

          }
          }></input>
        </div>
        <div>
          <p>{this.state.waterDepth}</p>
          <input placeholder="Water Depth" onChange={
          this.waterDepth = (event) => {
            this.setState({
              ...this.state,
              waterDepth: event.target.value
            })

          }
          }></input>
        </div>
        <button onClick={this.cancel}>Cancel</button>
        <button onClick={this.addDetails}>Add Details!</button>
      </div>
    )
  }
}

export default withRouter(connect()(AddSpot));
