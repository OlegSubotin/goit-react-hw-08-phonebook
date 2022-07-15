import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        Notify.success("You're registered ;)");
        return data;
    } catch (error) {
        Notify.failure('Something went wrong on register');
    }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        Notify.success("You're logged in ;)");
        return data;
    } catch (error) {
        Notify.failure('Something went wrong on login');
    }
});

const authOperations = {
    register,
    logIn,
};

export default authOperations;