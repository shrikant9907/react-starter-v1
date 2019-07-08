import React, { Component, Fragment } from "react";
import BasicList from "./basic/BasicList"
class List extends Component {
 
    state = { 
        listingdata: [
            {
                content: "Unlimited Vendors1",
            },
        ]
    }  

    render() {
        let list;
        if (this.props.type === 'basiclist') {
            list =  this.state.listingdata.map(sdata => <BasicList data={sdata} key="1" />);
        }else {
            list = <p>Cart type not given.</p>
        }

        return(
            <Fragment>
                {list}
            </Fragment>
        );
    }
}
export default List;