import React, { Component, Fragment } from "react";

import './images.css';

class Image extends Component {
    render() {
        return(
            <Fragment>
                <img class="card_image rounded-circle img-thumbnail" src={this.props.img} alt="" />
            </Fragment>
        );
    }
}

export default Image;