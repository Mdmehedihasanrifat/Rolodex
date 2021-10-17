import React from 'react';
import './seach.css'
const Search = (props) => {
  const {placeholder,handleChange}= props;
    return (
        <div >
            <input type="text" className="search" placeholder={placeholder} onChange={handleChange}/>
        </div>
    );
};

export default Search;