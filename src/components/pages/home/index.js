import React, {Component} from 'react';
import Search from "../../search"
import ImageList from "../../imageList";
import {fetchSearchImages} from "../../../actions";
import {connect} from "react-redux";

import "./home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            page: 0
        }
    }

    onInputChange = (event) => {
        this.setState({val: event.target.value});
    };

    onFormSubmit  = (event) => {
        event.preventDefault();
        this.setState({page: this.state.page+1});
        this.props.fetchSearchImages(this.state.val, this.state.page);
    };

    render() {
        return (
            <div className="home">
                <div className="banner">
                    <div className="banner__inner">
                        <Search value={this.state.value} onChange={this.onInputChange} onSubmit={this.onFormSubmit} />
                    </div>
                </div>
                <ImageList query={this.state.val} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchSearchImages
};

export default connect(null, mapDispatchToProps)(Home);