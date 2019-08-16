import React, {Component} from 'react';
import {connect} from "react-redux";
import './collection.css';
import {fetchCollectionById} from "../../../actions";
import PropTypes from "prop-types";

class Collection extends Component {
    componentDidMount() {
        this.props.fetchCollectionById(this.props.params.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.id !== this.props.params.id) {
            this.props.fetchCollectionById(this.props.params.id);
        }
    }

    render() {
        const {collection} = this.props;
        return(
            <section className="collection">
                <div className="collection__content">
                    <h2 className="collection__title">{collection.title}</h2>
                    {collection.cover_photo && <img src={ collection.cover_photo.urls.small} className="collection__image" alt={collection.cover_photo.alt_description} />}
                </div>
            </section>
        )
    }
}

Collection.propTypes = {
    collection: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        cover_photo: PropTypes.shape({
            urls: PropTypes.shape({
                small: PropTypes.string
            }),
            alt_description: PropTypes.string
        }),
    })
};

Collection.defaultProps = {
    collection: {
        id: 1,
        title: 'title',
        cover_photo: {
            urls: {
                small: 'small.jpg'
            },
            alt_description: 'alt_desc'
        }
    }
};

const mapStateToProps = state => {
    const {collection} = state.collectionPage;
    return {
        collection: collection
    }
};

const mapDispatchToProps = {
    fetchCollectionById
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection)