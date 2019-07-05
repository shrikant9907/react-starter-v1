import React, { Component, Fragment } from "react";
import './Card.css';

import BasicCard from './basic/Basic';
import TestimonialCard from './testimonial/Testimonial';

class Card extends Component {
 
    state = { 
        testidata: [
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
        ],
        basicdata: [
            {
                title: 'Card Title',
                imgsrc: 'https://picsum.photos/id/891/300/200',
                imgalt: 'Card Image',
                showimg: true,
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                title: 'Company Name',
                imgsrc: 'https://picsum.photos/id/891/300/200',
                imgalt: 'Shrikant Image',
                showimg: true,
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                title: 'Company Name',
                imgsrc: 'https://picsum.photos/id/891/300/200',
                imgalt: 'Shrikant Image',
                showimg: true,
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                title: 'Company Name',
                imgsrc: 'https://picsum.photos/id/891/300/200',
                imgalt: 'Shrikant Image',
                showimg: true,
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            }
             
        ]
    }  

    render(){

        let card;
        if (this.props.type==='testimonial') {
            card =  this.state.testidata.map(sdata => <div className="col-12 col-sm-4"><TestimonialCard data={sdata} /></div>);
        } else if (this.props.type==='basic') {
            card =  this.state.basicdata.map(sdata => <div className="col-12 col-sm-6"><BasicCard data={sdata} /></div>);
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