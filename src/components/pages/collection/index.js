import React, {Component} from 'react';
import {connect} from "react-redux";
import './collection.css';
import {fetchCollectionById, fetchCollections} from "../../../actions";
import collectionPage from "../../../reducers/collectionPage";

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
        console.log(collection);
        return(
            <div>
                <h1>{collection.title}</h1>
                {collection.cover_photo && <img src={ collection.cover_photo.urls.small} alt=""/>}
            </div>
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