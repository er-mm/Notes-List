// going to evaluate actions that are committed
// actions such as fetching, creating a new todo
// foractions we create types : basically constants

import { FETCH_BOOKS, CREATE_BOOK, DELETE_BOOK, EDIT_BOOK, UPDATE_BOOK, CONTAIN_BOOK, SEARCH_NOTE } from '../actions/types'
import { log } from "../utils/myLogger";

const initialState = {
    books: [],
    book: {},
    editableBook: {},
    submitUpdateBook: 'Save',
    containBook: {},
    searchNote: ''
};

// function evaluate that what type we going to deal with
// takes two things - initialstate and action type
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS:
            log('in reducer -> FETCH All Books');
            return { // return current state and add items from action.payload
                ...state,
                books: action.payload //now we have to implement this in our component (FtechPosts)
            }
        case CREATE_BOOK:
            log('in reducer -> ADD Book');
            return {
                ...state,
                book: action.payload
            };
        case DELETE_BOOK:
            log('in reducer -> DELETE Book');
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload)
            };
        case EDIT_BOOK:
            log('in reducer -> EDIT Book');
            return {
                ...state,
                editableBook: action.payload
            };
        case CONTAIN_BOOK:
            log('in reducer -> CONTAIN_BOOK');
            return {
                ...state,
                containBook: action.payload
            };
        case SEARCH_NOTE:
            log('in reducer -> SEARCH_NOTE');
            return {
                ...state,
                searchNote: action.payload
            };
        case UPDATE_BOOK:
            log('in reducer -> UPDATE Book');
            const updatedData = [];
            state.books.forEach(book => {
                if (book.id === action.payload.bookID) updatedData.push(Object.assign(book, action.payload.bookData))
                else updatedData.push(book);
            })
            return {
                ...state,
                books: updatedData
            };
        default:
            return state;
    }
}