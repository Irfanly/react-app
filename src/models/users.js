import feathers from '../feathers';

export const users = {

    state: {
        list: [],
        isLoading: false,
        error: null,
    },

    reducers: {
        setLoading: (state, payload) => ({ ...state, isLoading: payload }),
        setUsers: (state, payload) => ({ ...state, list: payload }),
        setError: (state, payload) => ({ ...state, error: payload }),
    },

    effects: (dispatch) => ({

        async fetchUsers() {

            dispatch.users.setLoading(true);

            try {
                const result = await feathers.service('users').find();
                dispatch.users.setUsers(result.data);
                dispatch.users.setLoading(false);
            } catch (error) {
                console.error('Error fetching users', error);
                dispatch.users.setError(error.message || 'Failed to fetch users');
                dispatch.users.setLoading(false);
            }
        },
    }),

};

export default users;