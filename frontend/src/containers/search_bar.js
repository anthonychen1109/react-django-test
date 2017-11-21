import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser, postUser } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: 'test3'
    };
    this.getUsers = this.getUsers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postUser(this.state.first_name)
  }

  getUsers() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="enter first name"
            />
          <button
            onClick={this.getUsers}
            >
            GET
          </button>
          <button
            >
            POST
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ UserReducer, PostReducer }){
  return { UserReducer, PostReducer }
}


export default connect(mapStateToProps,{ fetchUser, postUser })(SearchBar);
