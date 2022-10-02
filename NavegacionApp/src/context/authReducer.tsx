import { AuthState } from './AuthContext';

type AuthAction = {
    type: 'signIn'
};

export const reducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        default:
            return state;
    }
}