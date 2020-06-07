// going to evaluate actions that are committed
// actions such as fetching, creating a new todo
// foractions we create types : basically constants

import { FETCH_NOTES, CREATE_NOTE, DELETE_NOTE, EDIT_NOTE, UPDATE_NOTE, CONTAIN_NOTE, SEARCH_NOTE } from '../actions/types'
import { log } from "../utils/myLogger";

const initialState = {
    notes: [],
    note: {},
    editableNote: {},
    submitUpdateNote: 'Save',
    containNote: {},
    searchNote: ''
};

// function evaluate that what type we going to deal with
// takes two things - initialstate and action type
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTES:
            log('in reducer -> FETCH All Notes');
            return { // return current state and add items from action.payload
                ...state,
                notes: action.payload //now we have to implement this in our component (FtechPosts)
            }
        case CREATE_NOTE:
            log('in reducer -> ADD Note');
            log(state);
            log(action.payload);
            return {
                ...state,
                note: action.payload,
                notes: [...state.notes, action.payload]
            };
        case DELETE_NOTE:
            log('in reducer -> DELETE Note');
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload)
            };
        case EDIT_NOTE:
            log('in reducer -> EDIT Note');
            return {
                ...state,
                editableNote: action.payload
            };
        case CONTAIN_NOTE:
            log('in reducer -> CONTAIN_NOTE');
            return {
                ...state,
                containNote: action.payload
            };
        case SEARCH_NOTE:
            log('in reducer -> SEARCH_NOTE');
            return {
                ...state,
                searchNote: action.payload
            };
        case UPDATE_NOTE:
            log('in reducer -> UPDATE Note');
            const updatedData = [];
            state.notes.forEach(note => {
                if (note.id === action.payload.noteID) updatedData.push(Object.assign(note, action.payload.noteData))
                else updatedData.push(note);
            })
            return {
                ...state,
                notes: updatedData
            };
        default:
            return state;
    }
}