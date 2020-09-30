import React, { Component } from 'react'

import CHeader from '../components/part/Header'
import CNotFound from '../components/part/NotFound'

class PNotFound extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div> 
                <CHeader />
                <CNotFound />
            </div>
        )
    }
}

export default PNotFound