import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/bookActions';
import BookDetails from '../components/BookDetails';

const BookList = ({books,dispatch}) => {
    useEffect(()=> {
        dispatch(fetchBooks());
    } ,  [dispatch]);
    console.log(books)
    return (
        <div className="book-list">
            <ul>
            {books.map((book) => {
             return <BookDetails book={book} key={book.id} />;
             })}
      </ul>
        </div>
    )

};
const mapStateToProps = (state) => ({
    books: state.books.books,
  });
export default connect (mapStateToProps) (BookList);