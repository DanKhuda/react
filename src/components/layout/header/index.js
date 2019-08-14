import React, {Component} from 'react';
import {Link} from "react-router";
import "./header.css"
import logo from '../../../assets/logo.png';
import {connect} from "react-redux";
import {fetchCollections} from "../../../actions";
import Menu from "../menu";


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchCollections();
    }

    render() {
        const {collections} = this.props;
        return (
            <header className='header'>
                <div className='header-content'>
                    <div className='logo'>
                        <Link to={'/'} className='link'><img className='logo-image' src={logo} alt="logo"/></Link>
                    </div>
                    <nav className='menu'>
                        <ul className='navigation'>
                            {collections.map((item) => <Menu key={item.id} collection={item} />)}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    const {collections} = state.collectionPage;
    return {
        collections: collections
    }
};

const mapDispatchToProps = {
    fetchCollections
};

export default  connect(mapStateToProps, mapDispatchToProps)(Header);