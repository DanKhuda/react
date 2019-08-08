import React, {Component} from 'react';
import {connect} from "react-redux";
import ImageCard from '../imageCard';
import './image-list.css';

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

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
}

const mapStateToProps = state => {
    const {searchImages} = state.resultPage;
    return {
        resImages: searchImages
    }
};

export default connect(mapStateToProps, null)(ImageList);