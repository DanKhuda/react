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
            val: 'popular'
        }
    }

    componentDidMount() {
        this.props.fetchSearchImages(this.state.val);
    }

    onInputChange = (event) => {
        this.setState({val: event.target.value});
    };

    onFormSubmit  = (event) => {
        event.preventDefault();
        this.props.fetchSearchImages(this.state.val);
    };

    render() {
        const {isLoading} = this.props;
        return (
            <div className="home">
                <div className="banner">
                    <div className="banner__inner">
                        <Search value={this.state.value} onChange={this.onInputChange} onSubmit={this.onFormSubmit} />
                    </div>
                </div>
                {
                    isLoading ? "Loading" : null
                }
                <ImageList query={this.state.val} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {isLoading} = state.resultPage;
    return {
        isLoading: isLoading
    }
};

const mapDispatchToProps = {
    fetchSearchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);