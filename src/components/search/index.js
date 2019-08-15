import React from 'react';
import "./search.css";
import PropTypes from "prop-types";

const Search = (props) => (
    <section className="search">
        <form onSubmit={props.onSubmit} className="search-form">
            <input type="text" className="search-form__input" defaultValue={props.value} onChange={props.onChange} placeholder="Search photos" />
        </form>
    </section>
);

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

Search.defaultProps = {
    onSubmit: () => {},
    onChange: () => {},
    value: ""
};

export default Search;