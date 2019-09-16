import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { OverlayView } from '@react-google-maps/api';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';

const styles = {
    root: {
        margin: '5px',
        align: 'center'
    },
};

class Overlay extends Component {

    toEdit = (id) => {
        this.props.history.push(`addspot/${id}`)
    }

    handleDelete = (id) => {
        console.log(id);
        this.props.dispatch({
            type: 'DELETE_SPOT',
            payload: { id: id }
        })
    }

    render() {
        return (
            <div>
                <OverlayView
                className ="overlay"
                    position={{
                        lat: this.props.info.latitude,
                        lng: this.props.info.longitude
                    }}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                    <div style={{
                        background: `white`,
                        border: `1px solid #ccc`,
                        padding: 15
                    }}>
                        <div>
                            <h1>{this.props.info.spot_name}</h1>
                        </div>
                        <div>
                            <h3>Fish caught here:</h3> <h4>{this.props.info.fish_caught}</h4>
                        </div>
                        <div>
                            <Button variant="outlined"
                                className="btn btn.button"
                                color="inherit"
                                type="submit"
                                >images</Button>
                            {/*images button */}
                        </div>
                        <div>
                            <h3>Time of year:</h3> <h4>{this.props.info.time_of_year}</h4>
                        </div>
                        <div>
                            <h3>lure used:</h3> <h4>{this.props.info.lure_used}</h4>
                        </div>
                        <div>
                            <h3>Doing What:</h3> <h4>{this.props.info.type_of_fishing}</h4>
                        </div>
                        <div>
                            <h3>Water depth:</h3> <h4>{this.props.info.water_depth}</h4>
                        </div>
                        <div>
                            <Button variant="outlined"
                                className={this.props.classes.root}
                                color="primary"
                                type="submit"
                                onClick={() => { this.toEdit(this.props.info.id) }} type='button'>Add Details</Button>
                        </div>
                        <div>
                            <Button variant="outlined"
                                className={this.props.classes.root}
                                color="secondary"
                                type="submit"
                                onClick={() => this.handleDelete(this.props.info.id)}>Delete</Button>
                        </div>
                    </div>
                </OverlayView>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        info : reduxStore.overlayReducer
    };
};

export default withStyles(styles)(withRouter(connect(mapStateToProps)(Overlay)));
