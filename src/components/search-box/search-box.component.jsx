
import React from 'react';
import './search-box.styles.css';

// placeHolder and handleChange are jsx things so needs {}
const SearchBox = ({placeHolder, handleChange}) => (
    <input 
        className='search'
        type='search'
        placeholder={placeHolder}
        onChange={handleChange}
    />
)
export default SearchBox;