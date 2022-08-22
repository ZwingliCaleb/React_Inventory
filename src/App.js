import "./App.css";
import SearchBar from "./SearchBar";
import {useState} from "react";

function App() {
  const[filters, setFilters] = useState({});

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  return (
    <div className="App">
      <SearchBar updateSearchParams = {updateFilters}/>
    </div> 
  );
}

export default App;
  