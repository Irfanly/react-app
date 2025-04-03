import React, { useEffect } from 'react';

import { connect } from 'react-redux';


const UserList = ({ users, fetchUsers, isLoading, error }) => {

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (isLoading) {
        return <div>Loading users...</div>;
    }


    if (error) {
        return <div>Error: {error}</div>;
    }


    return (

        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
};


const mapStateToProps = (state) => ({
    users: state.users.list,
    isLoading: state.loading.effects.users.fetchUsers, // Access loading state for the effect
    error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: dispatch.users.fetchUsers,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);