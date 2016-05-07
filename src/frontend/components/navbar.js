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
        
        return  <header className="header">
                    <a href="#" className="header__icon" id="header__icon"
                       onClick={this.handleClick.bind(this)} href="#">
                    </a>

                    <div href="#" className="header__logo" href="#">
                        <strong>Vincent Truchot</strong>
                    </div>
                    <nav className="menu">
                        <Link to="/cv" activeClassName="link-active">
                            <i className="fa fa-2x fa-graduation-cap" aria-hidden="true"/>
                            {' CV'}
                        </Link>
                        <a target="_blank" href="https://github.com/muskacirca" activeClassName="link-active">
                            <i className="fa fa-2x fa-github" aria-hidden="true" />
                            {" GitHub"}
                        </a>
                        <a target="_blank" href="https://soundcloud.com/muskacirca" activeClassName="link-active">
                            <i className="fa fa-2x fa-soundcloud" aria-hidden="true"/>
                            {' Soundcloud'}
                        </a>
                    </nav>
                </header>


    }
}

export default NavBarBox
