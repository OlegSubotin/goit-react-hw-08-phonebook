import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
        isLoading: true,
        error: null,
    },
    reducers: {
        filteredContact: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [contactsOperations.fetchContacts.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [contactsOperations.fetchContacts.pending](state, _) {
            state.isLoading = true;
            state.error = null;
        },
        [contactsOperations.addContact.fulfilled](state, _) {
            state.isLoading = false;
            state.error = null;
        },
        [contactsOperations.addContact.pending](state, _) {
            state.isLoading = true;
            state.error = null;
        },
        [contactsOperations.addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [contactsOperations.deleteContact.fulfilled](state, _) {
            state.isLoading = false;
            state.error = null;
        },
        [contactsOperations.deleteContact.pending](state, _) {
            state.isLoading = true;
            state.error = null;
        },
        [contactsOperations.deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { filteredContact } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;