import React, { Component } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="header">
                <div className="navigation">
                    <Link to="/">
                        <div className="logo">
                            <img src="https://docrdsfx76ssb.cloudfront.net/static/1599081456/pages/wp-content/uploads/2019/02/bitly.png"></img>
                        </div>
                    </Link>
                    <ul className="navs">
                        <li className="nav-item">ABOUT</li>
                        <li className="nav-item">HOW TO USE</li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Header