import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        Notify.success("You're registered ;)");
        token.set(data.token);
        return data;
    } catch (error) {
        Notify.failure('Something went wrong on register');
    }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        Notify.success("You're logged in ;)");
        token.set(data.token);
        return data;
    } catch (error) {
        Notify.failure('Something went wrong on login');
    }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        Notify.success("You're logged out. Have a good day ;)");
        token.unset();
    } catch (error) {
        Notify.failure('Something went wrong on logout');
    }
});

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh', async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (token === null) {
            return thunkAPI.rejectWithValue();
        };

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            Notify.failure('Something went wrong on fetchCurrentUser');
        };        
    },
);

const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default authOperations;