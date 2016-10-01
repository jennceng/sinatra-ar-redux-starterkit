// App.js
import React, { Component } from 'react';
import User from './User';
import humps from 'humps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

  }

  componentDidMount() {
    $.ajax({
      url: '/api/v1/users.json'
    })
    .done(data=> {
      let camelizedData = humps.camelizeKeys(JSON.parse(data));
      // resolve(camelizedData);
      this.setState({ users: camelizedData.users })
    })
  }


  render() {
    let users = this.state.users.map(user => {
      return (
          <User
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          />

      );
    });

    return(
      <div>
        dopetastic
        {users}
      </div>
    )

  }
}

export default App;
