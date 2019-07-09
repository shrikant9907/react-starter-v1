import React, { Component } from 'react';
import './Post.css';

class NewPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      author: ''
    }
    
    // Formal Approch to bind the handler
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  } 
  
  // Handle On Change
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Handle On Submit
  handleSubmit(event){ 
    event.preventDefault();
    if(this.state.title.trim() && this.state.content.trim() && this.state.author.trim()) {
      console.log(this.state);    
      this.handleReset();
    }
   }

   // Handle Reset
   handleReset() {
     this.setState({
        title: '',
        content: '',
        author: ''
     })
   }

   render() {
     return (
        <div className="card px-4 py-5">
          <form action="" onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <input className="w-100 px-1" type="text" value={this.state.title} name="title" placeholder="Post Title" onChange={this.handleOnChange} />
            </div>
            <div className="form-group"> 
              <textarea className="w-100 px-1" value={this.state.content} name="content" placeholder="Post Content" onChange={this.handleOnChange} />
            </div>
            <div className="form-group">
              <input className="w-100 px-1" type="text" value={this.state.author} name="author" placeholder="Post Author" onChange={this.handleOnChange} />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary w-100 mb-3" value="Add Post" />
              <input type="reset" value="Reset" className="btn btn-secondary w-100 mb-3" onClick={this.handleReset} />
            </div>
          </form>
        </div>
     );
   }

}

export default NewPost;