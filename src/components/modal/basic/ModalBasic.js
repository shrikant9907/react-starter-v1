import React, { Component, Fragment } from "react";
import './ModalBasic.css';

import Image from '../../images/Images';   
   
class BasicPopup extends Component {   

    render(){ 

        let classes; 
        if(!this.props.data.classes || this.props.data.classes===''){
            classes = 'card mb-3';
        } else {
            classes = this.props.data.classes; 
        } 

        return(
            <Fragment>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
            </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>

                <div ={classes}>
                    <div className="mx-auto text-center">
                        <Image src={this.props.data.imgsrc} alt={this.props.data.imgalt} classes="card-img-top" />
                        <div className="card-icon position-absolute">
                            <i className="fas fa-quote-left"></i>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-title font-weight-bold m_b_20">{this.props.data.title}</div>
                        <div className="card-text m_b_20">{this.props.data.text}</div>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default BasicPopup;