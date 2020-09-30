import React, { Component } from 'react'
import axios from 'axios'
import CreactColor from '../../piece/react-color'

import './QRResult.scss'
var QRCode = require('qrcode.react');
class QRResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullLink: "adsfasdf",
            fgColor: '#555555'
        }

        this.setColor = this.setColor.bind(this)
        this.callApi = this.callApi.bind(this)
    }

    componentDidMount() {
        this.callApi()
    }

    setColor = (fgColor) => {
        this.setState({
            fgColor: fgColor
        })
    }

    callApi = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/links/' + this.props.id
        })
            .then((res) => {
                console.log(res.data)

                const { fullLink } = res.data
                this.setState({
                    fullLink: fullLink,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let { fullLink, fgColor } = this.state
        return (
            <div className="qr-result">
                <div className="qr-result-header">
                    <QRCode value={fullLink} fgColor={fgColor} />
                    <div className="qr-controller">
                        <CreactColor setColor={this.setColor} />
                        <CreactColor setColor={this.setColor} />
                    </div>
                </div>
                <div className="download">
                    <button type="button" className="btn btn-primary">Tải xuống</button>
                </div>
            </div>
        )
    }
}

export default QRResult