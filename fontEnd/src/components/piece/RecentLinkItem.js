import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CQR from '../part/QRResult'
import '../../scss/main.scss'

class RecentLinkItem extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let {fullLink, shortLink, _id, index} = this.props
        return (
            <div className="collapseItem">
                <div className="row">
                    <div className="col-md-10">
                        <span id="long-link" className="long-link">asdfsdfdsffffffffffffffffffffffffffffffds</span>
                        <a href={shortLink} id="short-link" className="short-link" target="_blank">gasdfsffgggggggggggggggggggggggggggggggggggdfae</a>
                    </div>
                    <div classname="col-md-2">
                        <CopyToClipboard text={shortLink}>
                            <button type="button" className="btn btn-primary">Copy</button>
                        </CopyToClipboard>
                        <button className="btn btn-primary" data-toggle="collapse" data-target={"#collapse-" + index}>QR Code</button>
                    </div>
                </div>
                <div id={"collapse-" + index} className= "qr-area">
                    <CQR id={_id}/>
                </div>
            </div>
        )
    }
}

export default RecentLinkItem