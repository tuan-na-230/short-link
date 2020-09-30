import React, { Component } from 'react'
import './input.scss'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayError: 'none'
        }

        this.validURL = this.validURL.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        let resultValidation = this.validURL(fullLink)
        if(!resultValidation) {
            this.setState({
                displayError: 'block'
            })
        }
        if(resultValidation) {
            this.setState({
                displayError: 'none'
            })
            this.props.callAPIPostNewLink(fullLink)
        }
    }

    render() {
        let displayError = this.state.displayError
        return (
            <div className="input-link">
                <form id="formGetLink" className="input-group mb-3" onSubmit={this.handleSubmit}>
                    <input type="text" name="inputLink" className="form-control" placeholder="Shorten your link" aria-label="Shorten your link" aria-describedby="basic-addon2" />
                    <button type="submit" className="input-group-append btn btn-primary">Shorten</button>
                </form>
                <div id="alert-url" className="alert alert-danger" role="alert" style={{display: displayError}}>
                    Unable to shorten that link. It is not a valid url.
                </div>
            </div>
        )
    }
}

export default Input