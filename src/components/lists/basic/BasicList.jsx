import React, { Component, Fragment } from "react";

class BasicList extends Component {
    render() {
        return(
            <Fragment>
                
                    <li className="pb-3"><i className="fas fa-plus"></i>{this.props.data.content}</li>
                     
            </Fragment>
        );
    }
}
export default BasicList;