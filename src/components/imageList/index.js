import React, {Component, PureComponent} from 'react';
import {connect} from "react-redux";
import ImageCard from '../imageCard';
import './image-list.css';
import {fetchLoadImages} from "../../actions";

class ImageList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    onPaginatedSearch = (e) => {
        this.setState({page: this.state.page + 1});
        this.props.fetchLoadImages(this.props.query, this.state.page);
    };

    onScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight){
            this.onPaginatedSearch();
        }
    };

    render() {
        const {resImages = []} = this.props;
        return (
            <section className="image-list">
                <div className="image-list__content">
                    <div className='images-grid'>
                        {resImages.map((item) => <ImageCard key={item.id} image={item} />)}
                    </div>
                </div>
            </section>
        )
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
}

const mapStateToProps = state => {
    const {searchImages} = state.resultPage;
    return {
        resImages: searchImages
    }
};

const mapDispatchToProps = {
    fetchLoadImages
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);