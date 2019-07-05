import React, { Component, Fragment } from "react";
import './Card.css';

import TestimonialCard from './testimonial/Testimonial';

class Card extends Component {
 
    state = { 
        data: [
            {
                person: 'Shrikant Yadav',
                company: 'Company Name',
                imgsrc: 'https://shrikant9907.github.io/webstyle/images/user_logo.png',
                imgalt: 'Shrikant Image',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                person: 'Shrikant Yadav',
                company: 'Company Name',
                imgsrc: 'https://shrikant9907.github.io/webstyle/images/user_logo.png',
                imgalt: 'Shrikant Image',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                person: 'Shrikant Yadav',
                company: 'Company Name',
                imgsrc: 'https://shrikant9907.github.io/webstyle/images/user_logo.png',
                imgalt: 'Shrikant Image',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            }
        ]
    }  

    render(){

        let card;
        if (this.props.type==='testimonial') {
            card =  this.state.data.map(sdata => <div className="col-12 col-sm-4"><TestimonialCard data={sdata} /></div>);
        } else {
            card = <p>Cart type not given.</p>
        }

        return(
            <Fragment>
                {card}
            </Fragment>
        );
    }
}
export default Card;