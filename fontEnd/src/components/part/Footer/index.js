import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <small>&copy; Pi</small>
                <small>Quyền riêng tư & Điều khoản</small>
            </div>
        )
    }
}

export default Footer