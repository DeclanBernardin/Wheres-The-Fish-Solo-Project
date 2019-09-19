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
const styles = ({
  root: {
    margin: '34px',
    borderColor: 'white',
  },
  
});

class AddSpot extends Component {
  
state={
  displayHidden: true,
}

componentDidMount(){
  this.fetchDetails()
}


//goes to the database and grabs the details of the item that has the id given 
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

//adds the details to the spot and updates them
addDetails = () => {
console.log('text', this.props.info);
  this.props.dispatch({
    type: 'ADD_DETAILS_TO_SPOT',
    payload: this.props.info
  })
  this.props.history.push('/Mainpage')
}



  render(){
    return(
      <div className='addDetailsPage'>
        <label className="login">
            Spot name:
        <div>
          <TextField  value={this.props.info.spot_name} onChange= {(event) => 
           this.props.dispatch({
            type: 'EDIT_DETAIL_SPOT_NAME',
            payload: event.target.value
           })
          }></TextField>
        </div>
        </label>
        <label className="login">
            Type of fish caught here:
        <div>
            <TextField value={this.props.info.fish_caught} onChange={(event) => 
              this.props.dispatch({
                type: 'EDIT_DETAIL_FISH_CAUGHT',
                payload: event.target.value
              })
          }></TextField>
        </div>
        </label>
        <label className="login">
            Pictures:
        <div>
          <div></div>
            <TextField value={this.props.info.images} onChange={(event) => 
              this.props.dispatch({
                type: 'EDIT_DETAIL_IMAGES',
                payload: event.target.value
              })
          }></TextField>
        </div>
        </label>
        <label className="login">
            Weather:
        <div>
            <TextField value={this.props.info.weather} onChange={(event) => 
              this.props.dispatch({
                type: 'EDIT_DETAIL_WEATHER',
                payload: event.target.value
              })
          }></TextField>
        </div>
        </label>
        <label className="login">
            Time of year to fish here:
        <div>
            <TextField value={this.props.info.time_of_year} onChange={(event) => 
              this.props.dispatch({
                type: 'EDIT_DETAIL_TIME_OF_YEAR',
                payload: event.target.value
              })
          }></TextField>
        </div>
        </label>
        <label className="login">
            Lure to use:
        <div>
            <TextField value={this.props.info.lure_used} onChange={(event) => 
              this.props.dispatch({
                type: 'EDIT_DETAIL_LURE_USED',
                payload: event.target.value
              })
          }></TextField>
        </div>
        </label>
        <label className="login">
            What type of fishing:
        <div>
            <TextField value={this.props.info.type_of_fishing} onChange={(event) => 
              this.props.dispatch({
                type: 'EDIT_DETAIL_TYPE_OF_FISHING',
                payload: event.target.value
              })
          }></TextField>
        </div>
        </label>
        <label className="login">
            Water Depth:
        <div>
            <TextField value={this.props.info.water_depth} onChange={(event) => 
              this.props.dispatch({
                type: 'EDIT_DETAIL_WATER_DEPTH',
                payload:  event.target.value 
              })
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

const mapStateToProps = reduxStore => {
  return {
    info: reduxStore.editOverlayReducer
  };
};

export default withStyles(styles)(withRouter(connect(mapStateToProps)(AddSpot)));
