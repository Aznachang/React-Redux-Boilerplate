import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
  // display
  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>{user.first} {user.last}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

// UserList Component is aware of 'user' store-data
export default connect(mapStateToProps)(UserList);