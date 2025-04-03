import React, { useEffect, useState } from 'react';
import feathers from './feathers';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    feathers.service('users').find()
      .then(result => setUsers(result.data))
      .catch(error => console.error('Error fetching users', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;