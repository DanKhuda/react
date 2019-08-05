import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchImages} from "../../actions";
import {getResultImages} from '../../selectors';
import './image-list.css';

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchImages()
    }

    renderImage (image, index) {
        return (
            <div className='images-grid__item' key={index}>
                <img src={image.urls.small} className="image" alt={image.id} />
            </div>
        )
    }

    render() {
        const {resImages} = this.props;
        console.log(resImages.length);
        return (
            <section className="image-list">
                <div className="image-list__content">
                    <div className='images-grid'>
                        {
                            resImages.map((image, index) => this.renderImage(image, index))
                        }
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    resImages: getResultImages(state),
});

const mapDispatchToProps = {
    fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);