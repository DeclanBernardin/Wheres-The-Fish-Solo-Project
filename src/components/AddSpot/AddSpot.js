import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
const styles = {
  root: {
    margin: '34px',
    borderColor: 'white',
  },
};

class AddSpot extends Component {
  
state={}

componentDidMount(){
  this.fetchDetails()
}

fetchDetails = (id) => {
 console.log(this.props.match.params.id);
  this.setState({
    ...this.state,
    id: this.props.match.params.id
  })
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
  this.props.dispatch({
    type: 'ADD_DETAILS_TO_SPOT',
    payload: this.state
  })
  this.props.history.push('/Mainpage')
}



  render(){
    return(
      <div className='addDetailsPage'>
        <label className="login">
            Spot name:
        <div>
          <TextField placeholder="Name The Spot!" onChange= {
          this.spotName = (event) => {
            this.setState({
              ...this.state,
              name: event.target.value
            })

          }
          }></TextField>
        </div>
        </label>
        <label className="login">
            Type of fish caught here:
        <div>
          <TextField placeholder="Type of fish caught here" onChange={
            this.spotFish = (event) => {
              this.setState({
                ...this.state,
                fishCaught: event.target.value
              })

            }
          }></TextField>
        </div>
        </label>
        <label className="login">
            Pictures:
        <div>
          <div></div>
          <TextField placeholder="Pictures!" onChange={
          this.pictures = (event) => {
            this.setState({
              ...this.state,
              pictures: event.target.value
            })

          }
          }></TextField>
        </div>
        </label>
        <label className="login">
            Weather:
        <div>
          <TextField placeholder="Weather" onChange={
          this.weather = (event) => {
            this.setState({
              ...this.state,
              weather: event.target.value
            })

          }
          }></TextField>
        </div>
        </label>
        <label className="login">
            Time of year to fish here:
        <div>
          <TextField placeholder="Time Of Year" onChange={
          this.timeOfYear = (event) => {
            this.setState({
              ...this.state,
              timeOfYear: event.target.value
            })

          }
          }></TextField>
        </div>
        </label>
        <label className="login">
            Lure to use:
        <div>
          <TextField placeholder="Lure Used" onChange={
          this.lure = (event) => {
            this.setState({
              ...this.state,
              lure: event.target.value
            })

          }
          }></TextField>
        </div>
        </label>
        <label className="login">
            What type of fishing:
        <div>
          <TextField placeholder="Type Of Fishing" onChange={
          this.typeOfFishing = (event) => {
            this.setState({
              ...this.state,
              typeOfFishing: event.target.value
            })

          }
          }></TextField>
        </div>
        </label>
        <label className="login">
            Water Depth:
        <div>
          <TextField placeholder="Water Depth" onChange={
          this.waterDepth = (event) => {
            this.setState({
              ...this.state,
              waterDepth: event.target.value
            })

          }
          }></TextField>
        </div>
        </label>
        <Button 
          variant="contained"
          className={this.props.classes.root}
          color="secondary"
          type="submit"
          name="submit"
          value="log in"onClick={this.cancel}>Cancel</Button>
        <Button id="loginBtn"
          variant="contained"
          className={this.props.classes.root}
          color="inherit"
          type="submit"
          name="submit"
          value="log in"onClick={this.addDetails}>Add Details!</Button>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(connect()(AddSpot)));
