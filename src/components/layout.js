import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import * as layoutStyles from './layout.module.scss';


function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
