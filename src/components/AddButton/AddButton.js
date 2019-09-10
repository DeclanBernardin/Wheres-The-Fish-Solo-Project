import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddButton extends Component {

    toAddSpot = () => {
        this.props.history.push('/addspot')
    }
    render(){
        return(
            <div>
                <button onClick={this.toAddSpot}>Add Spot</button>
            </div>
        )
    }
}

export default  withRouter(AddButton);