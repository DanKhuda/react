import React, {Component} from 'react';
import {connect} from "react-redux";
import './collection.css';
import {fetchCollectionById} from "../../../actions";

class Collection extends Component {
    constructor(props) {
        super(props);
    }


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