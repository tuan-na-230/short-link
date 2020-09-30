import React, { Component } from 'react'
import CShortLinkResult from '../ShortLinkResult'
import CQRResult from '../QRResult'
import './result.scss'


class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            switchSelected: 'CShortLinkResult',
        }

        this.switchResult = this.switchResult.bind(this)
    }

    switchResult = (e) => {
        let selected = e.target.innerHTML
        if (selected == 'Short Link') {
            this.setState({ switchSelected: 'CShortLinkResult' })
        }
        if (selected == 'QR Code') {
            this.setState({ switchSelected: 'CQRResult' })
        }
    }

    render() {
        let id = this.props.id
        let selected = this.state.switchSelected
        if(!id) {
            return ('')
        }
        if (selected == 'CShortLinkResult') {
            return (
                <div className="result">
                    <div className="switch-result">
                        <button type="button" className="btn btn-success" onClick={this.switchResult}>Short Link</button>
                        <button type="button" className="btn btn-success" onClick={this.switchResult}>QR Code</button>
                    </div>
                    <div className="show-result">
                        <CShortLinkResult id={id}/>
                    </div>
                </div>
            )
        }
        if (selected == 'CQRResult') {
            return (
                <div className="result">
                    <div className="switch-result">
                        <button type="button" className="btn btn-success" onClick={this.switchResult}>Short Link</button>
                        <button type="button" className="btn btn-success" onClick={this.switchResult}>QR Code</button>
                    </div>
                    <div className="show-result">
                        <CQRResult id={id}/>
                    </div>
                </div>
            )
        }
    }
}

export default Result