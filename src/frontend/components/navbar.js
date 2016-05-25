'use strict';

import React from 'react'

import {
    Link
} from 'react-router'


import {
    toggleClassInBody
} from '../../utils/utils'

class NavBarBox extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick(e) {
        e.preventDefault()
        var className = 'with--sidebar'
        toggleClassInBody(className)

    }

    render() {
        
        let style = this.props.showDashboard ? "header dashboard" : "header";

        return  <header className={style}>
                    
            
                    <div href="#" className="header__logo" href="#">
                        <Link to="/">
                            <strong>Vincent Truchot</strong>
                        </Link>
                    </div>

                    <a href="#" className="header__icon" id="header__icon"
                       onClick={this.handleClick.bind(this)} href="#">
                        <img src="style/images/avatar.png" className="img-circle" />
                    </a>
                    <nav className="menu">
                        <Link to="/cv" activeClassName="link-active">
                            <i className="fa fa-2x fa-graduation-cap" aria-hidden="true"/>
                            {' CV '}
                        </Link>
                        <Link to="/projects" activeClassName="link-active">
                            <i className="fa fa-2x fa-code-fork" aria-hidden="true"/>
                            {' Projets'}
                        </Link>
                        <a target="_blank" href="https://github.com/muskacirca" activeClassName="link-active">
                            <i className="fa fa-2x fa-github" aria-hidden="true" />
                            {" GitHub"}
                        </a>
                        <a target="_blank" href="https://soundcloud.com/muskacirca" activeClassName="link-active">
                            <i className="fa fa-2x fa-soundcloud" aria-hidden="true"/>
                            {' SoundCloud'}
                        </a>
                    </nav>
                </header>


    }
}

export default NavBarBox
