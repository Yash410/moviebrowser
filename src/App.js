// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import { useState,useEffect} from 'react';
import Home from './Components/Home';
import About from './Components/About';
import { Route, Switch } from 'react-router-dom';
import SearchView from './Components/SearchView';


function App() {
  const [searchResults,setsearchResults]=useState([]);
  const [searchText,setSearchText]=useState('');
  return (
    <div>
      <Navbar searchText={searchText}/>
      <Switch>
        <Route path="/" exact>
        <Home/>
        </Route>
        <Route path="/about" component={About}/>
        <Route path="/search">
        <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
