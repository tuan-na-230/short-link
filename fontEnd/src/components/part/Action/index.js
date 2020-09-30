import React, { Component } from 'react'
import axios from 'axios'
import './action.scss'

import CInput from '../Input'
import CResult from '../Result'
import CRecent from '../Recent'


class Action extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullLink: undefined,
            shortLink: undefined,
            id: undefined
        }

        this.setActionConfig = this.setActionConfig.bind(this)
        this.callAPIPostNewLink = this.callAPIPostNewLink.bind(this)
    }

    setActionConfig = (config = { fullLink, shortLink, id }) => {
        this.setState(config)
    }

    callAPIPostNewLink = (fullLink) => {
        console.log(this.state.fullLink)
        axios({
            method: 'POST',
            url: 'http://localhost:3000/',
            data: {
                fullLink: fullLink
            }
        })
            .then((res) => {
                const { fullLink, shortLink, _id } = res.data
                this.setActionConfig({
                    fullLink: fullLink,
                    shortLink: shortLink,
                    id: _id
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let { id } = this.state
        if (!id) {
            return (
                <div className="action">
                    <CInput callAPIPostNewLink={this.callAPIPostNewLink} />
                </div>
            )
        }
        if (id) {
            return (
                <div className="action">
                    <CInput callAPIPostNewLink={this.callAPIPostNewLink} />
                    <CResult id={id}/>
                </div>
            )
        }

    }
}

export default Action