import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 

class SpotDetails extends Component {

getSpecificDetails = (id) => {
console.log(this.props.match.params.id);

}

    render() {
        return (
            <div>
                <button onClick={this.getSpecificDetails}>button</button>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(withRouter(SpotDetails));
