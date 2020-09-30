import React, { Component } from 'react'
import './inputLink.scss'
import axios from 'axios'
import CResult from '../Result'
import CRecent from '../Recent'

class InputLink extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullLink: undefined,
            shortLink: undefined,
            displayResult: "none", 
            id: undefined
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.validURL = this.validURL.bind(this)
    }

    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    handleSubmit(event) {
        event.preventDefault();
        let fullLink = event.target.inputLink.value
        if (this.validURL(fullLink)) {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/',
                data: {
                    fullLink: fullLink
                }
            })
                .then((res) => {
                    console.log(res.data)

                    const { fullLink, shortLink, _id } = res.data
                    console.log(_id)
                    this.setState({
                        fullLink: fullLink,
                        shortLink: shortLink, 
                        displayResult: 'inline',
                        id: _id
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            document.getElementById('alert-url').style = { 'display': 'inline' }
        }
    }

    render() {
        let id = this.state.id
        return (
            <div>
                <form id="formGetLink" className="input-group mb-3" onSubmit={this.handleSubmit}>
                    <input type="text" name="inputLink" className="form-control" placeholder="Shorten your link" aria-label="Shorten your link" aria-describedby="basic-addon2" />
                    <button type="submit" className="input-group-append btn btn-primary">Shorten</button>
                </form>
                <div id="alert-url" className="alert alert-danger" role="alert" style={{ 'display': 'none' }}>
                    Unable to shorten that link. It is not a valid url.
                </div>
                <CResult id={id}/>
                <CRecent id={id}/>
            </div>
        )
    }
}

export default InputLink