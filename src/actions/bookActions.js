
import Axios from 'axios';
export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOk';


//Action to use as props to get books

export const fetchBooks = () => async (dispatch) => {
    try {
        const res = await Axios.get(
          'https://fakerapi.it/api/v1/custom?_quantity=5&author=name&id=counter&title=city'
        );
    
        const data = res.data.data;
    
        dispatch({
          type: GET_BOOKS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
};
export const addBook = (newBook) => async (dispatch) => {
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
  };
//Fetch data from Api 
// export const fetchDtata = async () => {
//     try{
//         const res = await Axios.get(
//             'https://fakerapi.it/api/v1/custom?_quantity=5&author=name&id=counter&title=city'
//         );
//         return res.data.data;
//     }catch(error){
//         console.log(error)
//     }
// }



/*

    we will use axios inside action 
*/