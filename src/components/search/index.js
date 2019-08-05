import React, {Component} from 'react';
import {connect} from "react-redux";
import "./search.css";
import {fetchSearchImages} from "../../actions";
import {getResultImages} from "../../selectors";

class Search extends Component{
    constructor (props) {
        super(props);
        this.state = {
            val: ''
        };
    }

    componentDidMount() {

    }

    onInputChange = (event) => {
        this.setState({val: event.target.value})
    };

    onFormSubmit  = (event) => {
        event.preventDefault();
        this.props.fetchSearchImages(this.state.val);
    };

    render() {
        const {images} = this.props;
        console.log(images);
        return (
            <section className="search">
                <form onSubmit={this.onFormSubmit} className="search-form">
                    <input type="text" className="search-form__input" value={this.state.val} onChange={this.onInputChange} placeholder="Search photos" />
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    fetchSearchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);