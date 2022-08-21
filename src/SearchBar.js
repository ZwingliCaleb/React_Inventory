import {useState} from "react";

function SearchBar(props){
    return(
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label for="name-field"> Name:</label>
                <input id="name-field" type="text"/>
                <label for="price-field"> Max Price:</label>
                <input id="price-field" type="number"/>
                <label for="type-field">Type:</label>
                <input id="type-field" type="text"/>
                <label for="brand-field">Brand:</label>
                <input id="brandfield" type="text"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;