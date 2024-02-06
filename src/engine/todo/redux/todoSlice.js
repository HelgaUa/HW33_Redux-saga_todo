import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [{text: 'First task', id: uuidv4(), }],
        loading: false,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push({text: action.payload, id: uuidv4()});
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})
export default todoSlice;