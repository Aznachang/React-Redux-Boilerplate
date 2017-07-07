import React, {Component} from 'react';
import {blindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
  render() {
    return (
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

// UserList Component is aware of 'user' store-data
export default connect(mapStateToProps)(UserList);