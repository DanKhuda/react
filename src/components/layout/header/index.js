import React, {Component} from 'react';
import {connect} from "react-redux";
import "./header.css"
import logo from '../../../assets/logo.png';
// import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <header className='header'>
                <div className='header-content'>
                    <div className='logo'>
                        <a href="/" className="link"><img className='logo-image' src={logo} alt="logo"/></a>
                    </div>
                    <nav className='menu'>
                        <ul className='navigation'>
                            <li className='item'>
                                <a href="/" className="link">Home</a>
                            </li>
                            <li className='item'>
                                <a href="/" className="link">Link 1</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);