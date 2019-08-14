import React from 'react';
import "./search.css";

const Search = (props) => (
    <section className="search">
        <form onSubmit={props.onSubmit} className="search-form">
            <input type="text" className="search-form__input" value={props.value} onChange={props.onChange} placeholder="Search photos" />
        </form>
    </section>
);

export default Search;