'use strict';

import React from 'react'

import NavBarBox from './navbar'

import {
    toggleClassInBody
} from '../../utils/utils'

class MainApp extends React.Component{

    constructor(props) {
        super(props);
    }

    onHiddenSiteCLick() {
        var className = 'with--sidebar'
        toggleClassInBody(className)
    }

    render() {
        
        let style = this.props.toggleDashboard ? "site-content dashboard" : "site-content";

        return (
            <div className="site-pusher">
                <NavBarBox showDashboard={this.props.toggleDashboard} />

                <div className={style}>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                <div className="site-cache" onClick={this.onHiddenSiteCLick.bind(this)}></div>
            </div>
        );
    }
}

export default MainApp
