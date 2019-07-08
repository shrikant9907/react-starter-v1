import React, { Component } from "react";


// API
import  ApiServices  from  '../api/ApiServices';
const  Api  =  new  ApiServices();

class AddPerson extends Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

     // Usering API in this
     Api.createData(user).then(result => { 
      console.log(result); 
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default AddPerson;