import { GET_BOOKS, ADD_BOOK } from '../actions/bookActions';


const intialState = {
    books:[]
};

 const bookReducer = (state = intialState , actions) => {
    switch(actions.type){
        case GET_BOOKS :
            return {
                ...state,
                books : actions.payload
            }
        case  ADD_BOOK:
            return {
                  ...state,
                  books: [...state.books, actions.payload],
            };
        default:
        return state;
    }

}

export default bookReducer;