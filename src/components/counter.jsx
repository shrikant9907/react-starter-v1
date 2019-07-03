import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    constructor() {
        super();

        // Formal Approch to bind the handler
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    } 

    handleIncrement() {
        this.setState({ count: this.state.count + 1})
    }

    handleDecrement() {
        this.setState({ count: this.state.count - 1})
    }

    render() {

        return (
            <div>
                <span className={ this.getBadgetClasses() }>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-primary px-3 btn-sm">+</button>
                <button onClick={this.handleDecrement} className="btn btn-primary px-3 btn-sm">-</button>
                {/* {this.renderTags()} */}
            </div>
            );
    }

    renderTags() {

        if (this.state.tags.length === 0) return <p>There is not tags</p>
 
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgetClasses() {
        let classes = "badge  px-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"; 
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}



export default Counter;