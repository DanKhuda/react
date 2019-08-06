import React from 'react';
import Search from "../../search"
import ImageList from "../../imageList";
import "./home.css"

const Home = () => (
    <div className="home">
        <div className="banner">
            <div className="banner__inner">
                <Search />
            </div>
        </div>
        <ImageList />
    </div>
);

export default Home;