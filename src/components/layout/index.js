import React from 'react';
import Header from "../../components/layout/header";
import '../../index.css';

const Layout = ({children}) => (
    <div className='wrapper'>
        <div>
            <Header />
        </div>
        <div className="content">
            {children}
        </div>
    </div>
);

export default Layout;