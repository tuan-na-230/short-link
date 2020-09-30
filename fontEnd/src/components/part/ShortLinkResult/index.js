import React, { Component } from 'react'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ShortLinkResult.scss'

class ShortLinkResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullLink: undefined,
            shortLink: undefined,
        }

        this.callApi = this.callApi.bind(this)
    }

    componentDidMount() {
        console.log('vao')
        this.callApi();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            console.log(this.props.id)
            this.callApi();
        }
    }

    callApi = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/links/' + this.props.id
        })
            .then((res) => {
                const { fullLink, shortLink } = res.data
                this.setState({
                    fullLink: fullLink,
                    shortLink: shortLink,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let {shortLink, fullLink} = this.state
        return (
            <div className="link-result">
                <div className="row">
                    <div className="col-md-11">
                        <span id="long-link" className="long-link">{fullLink}</span>
                        <a href={fullLink} id="short-link" className="short-link" target="_blank">{shortLink}</a>
                    </div>
                    <div className="col-md-1">
                        <CopyToClipboard text={this.state.shortLink}>
                            <button type="button" className="btn btn-primary">copy</button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShortLinkResult