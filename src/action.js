import feathers from './feathers';

export function findUsers() {
  return dispatch => {
    feathers.service('users').find()
      .then(result => dispatch({ type: 'FIND_USERS', payload: result.data }))
      .catch(error => console.error('Error fetching users', error));
  };
}