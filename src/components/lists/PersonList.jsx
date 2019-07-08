import React, { Component, Fragment } from "react";

import UserList from './userlist/UserList';
import axios from 'axios';

class PersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ persons: res.data });
      })
  }

  render() {
    return (
        <Fragment>
            <UserList data={this.state.persons}  classes="list-group list-unstyled text-muted  mb-2 text-left w-100 bg-white" itemclasses="pb-3"/>
        </Fragment>
    )
  }
}

export default PersonList;