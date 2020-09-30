import React, { Component } from 'react'
import './recent.scss'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CQRResult from '../QRResult'

class Recent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recentLinks: []
        }

        this.callApiGetRecent = this.callApiGetRecent.bind(this)
        this.showRecentLinks = this.showRecentLinks.bind(this)
    }

    componentDidMount() {
        this.callApiGetRecent()
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.callApiGetRecent()
        }
    }

    callApiGetRecent = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/recentLinks',
        })
            .then((res) => {
                console.log('recent', res.data)

                this.setState({
                    recentLinks: res.data,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    showRecentLinks = () => {
        let list = this.state.recentLinks || []
        return (
            list.map((item, index) => {
                console.log(item)
                console.log(!item)
                if (item) {
                    return (
                        <div className="card" key={index}>
                            <div className="card-header" id="headingOne">
                                <span>{item.fullLink}</span>
                                <span>{item.shortLink}</span>
                                <div className="button-control">
                                    <CopyToClipboard text={item.shortLink}>
                                        <button type="button" className="btn btn-primary">copy</button>
                                    </CopyToClipboard>
                                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"collapse-" + index} aria-expanded="true" aria-controls={"collapse-" + index}>
                                        Mã QR
                                    </button>
                                </div>
                            </div>
                            <div id={"collapse-" + index} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <CQRResult id={item._id} />
                                </div>
                            </div>
                        </div>
                    )
                }

            }
            )
        )
    }

    render() {
        if (this.state.recentLinks.length == 0) {
            return null
        }
        else {
            return (
                <div className="recent" id="recent">
                    <div className="accordion" id="accordionExample">
                        {this.showRecentLinks()}
                    </div>
                </div>
            )
        }

    }
}

export default Recent