import React, {Component} from 'react';
import {Link} from "react-router";
import "./header.css"
import logo from '../../../assets/logo.png';
import {connect} from "react-redux";
import {fetchCollections} from "../../../actions";
import ImageCard from "../../imageCard";


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
        console.log(collections);
        return (
            <header className='header'>
                <div className='header-content'>
                    <div className='logo'>
                        <Link to={'/'} className='link'><img className='logo-image' src={logo} alt="logo"/></Link>
                    </div>
                    <nav className='menu'>
                        <ul className='navigation'>
                            <li className='item'>
                                <Link to={'/'} className='link'>Home</Link>
                            </li>
                            {collections.map((item) => {
                                return(
                                    <li className='item'>
                                        <Link to={`/collection/${item.id}`} className='link'>{item.title}</Link>
                                    </li>
                                )
                            })}
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