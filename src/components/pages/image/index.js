import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {fetchImageById} from "../../../actions";
import {object} from "prop-types";
import location from "../../../assets/location.png"
import downloads from "../../../assets/download.png"

import "./image.css";

class Image extends Component {

    componentDidMount() {
        this.props.fetchImageById(this.props.params.id);
    }

    render() {
        const {image} = this.props;
        console.log(image);
        return (
            <section className="photo">
                <div className="photo__content">
                    <p className="photo__description">
                        { image.description || image.alt_description }
                    </p>
                    <div className="preview">
                        { image.urls && <img src={image.urls.regular} className="preview__image" alt={image.alt_description} />}
                    </div>
                    <div className="info">
                        <p className="info__item">
                            <img src={location} className="info__icons" alt="location" />
                            { image.location && image.location.title || "Test" }
                        </p>
                        <div className="info__item">
                            <img src={downloads} className="info__icons downloads" alt="location" />
                            { image.downloads }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

Image.propTypes = {
  image: object
};

Image.defaultProps = {
  image: {
      description: "Default description",
      location: 'Default loc',
      urls: {
          full: "test"
      }
  }
};

const mapStateToProps = state => {
    const {image} = state.imagePage;
    return {
        image: image
    }
};

const mapDispatchToProps = {
    fetchImageById
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Image));