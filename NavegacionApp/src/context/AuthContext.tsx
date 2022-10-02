import { createContext, useReducer } from "react";
import { reducer } from "./authReducer";
// Definir como luce, que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}
// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}
// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}
// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente que es proveedor del estado

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(reducer, authInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

