import { createContext, useEffect, useReducer } from "react";
import axios from 'axios'

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};


const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
};

const reducer = (state, action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;


const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initialize = async () => {
            try {
                const accessToken = window.localStorage.getItem("accessToken");
                const userEmail = window.localStorage.getItem("userEmail");
                const user = { email: userEmail }
                if (accessToken) {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    });
                } else {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };

        initialize();
    }, []);

    const login = async (email) => {

        const res = await axios.post('http://127.0.0.1:8000/api/login', {email})
        console.log(res)

        if (res.data.success) {
            const accessToken = Date.now();
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("userEmail", email);
            const user = { email: email }
            dispatch({
                type: "LOGIN",
                payload: {
                    user,
                },
            });
        }
        else {
            dispatch({ type: "LOGOUT" });
            alert('Email and Password does not match')
        }

    };

    const logout = async () => {
        localStorage.removeItem("accessToken");
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;