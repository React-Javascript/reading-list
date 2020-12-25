import logo from './logo.svg';
import './index.css';
import BookList from './components/BookList'
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm/>
      
    </div>
  );
}

export default App;
/**
 * 
 * 
 * https://dev.to/rajandmr/setting-up-redux-store-in-your-react-application-1mfe
 */