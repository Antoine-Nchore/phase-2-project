import Button from 'react-bootstrap/Button';
import SearchBar from './Components/SearchBar'
function App() {
  return (
    <>
    <h1>Hello World</h1>
    <Button variant="warning">Warning</Button>
    <div className='search-bar-container'>
      <SearchBar/>
    </div>
    </>
  );
}

export default App;
