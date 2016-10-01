import React from 'react';

const User = ({ firstName, lastName }) => {
  return(
    <div>
      <p>
        First Name: {firstName} Last Name: {lastName}
      </p>
    </div>
  )
}

export default User;
