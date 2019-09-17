import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class ImagePage extends Component {
    render(){
        return(
        <div>
            <img src= {this.props.info.images} alt='pictures of fish'/>
        </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        info: reduxStore.overlayReducer
    };
};

export default connect(mapStateToProps)(ImagePage);