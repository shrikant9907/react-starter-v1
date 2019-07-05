import React, { Component, Fragment } from "react";
import './Card.css';

import Image from '../images';

class Card extends Component {
    render(){
        return(
            <Fragment>
               <div className="col-md">
                    <div class="card mb-3 pt-3 testimonials_card2 position-releative rounded-lg">
                        <div class="mx-auto text-center py-3">
                        <Image img={this.props.img}/>
                            <div class="card-icon position-absolute">
                                <i class="fas fa-quote-left"></i>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-text mb-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <h5 class="card-title font-weight-bold">{this.props.authorName}</h5>
                            <p><small class="text-secondary">{this.props.title}</small></p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Card;