
var QRCode = require('qrcode.react');
import React, { Component } from 'react'

class ReactComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { fgColor, fullLink } = this.props
        console.log(fullLink)
        return (
            <div> 
                <QRCode value={fullLink} fgColor={fgColor} />
            </div>
        )
    }
}

export default ReactComponent