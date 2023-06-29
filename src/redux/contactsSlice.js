import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// extraReducers:     // {
//   [fetchContacts.pending](state) {
//     state.isLoading = true;
//   },
//   [fetchContacts.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = payload;
//   },
//   [fetchContacts.rejected](state, { payload }) {
//     state.isLoading = false;
//     state.error = { payload };
//   },
//   [addContact.pending](state) {
//     state.isLoading = true;
//   },
//   [addContact.fulfilled](state, { payload }) {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(payload);
// },
//   [addContact.rejected](state, { payload }) {
//     state.isLoading = false;
//     state.error = { payload };
//   },
//   [deleteContact.pending](state) {
//     state.isLoading = true;
//   },
//   [deleteContact.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = state.items.filter(contacts => contacts.id !== payload);
//   },
//   [deleteContact.rejected](state, { payload }) {
//     state.isLoading = false;
//     state.error = { payload };
//   },
// },
