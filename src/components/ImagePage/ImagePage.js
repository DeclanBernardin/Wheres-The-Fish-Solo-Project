import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class ImagePage extends Component {
    render(){
        return(
        <div className="imagePage">
            <img src= {this.props.info.images} alt='pictures of fish' width= "335" length= "335"/>
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