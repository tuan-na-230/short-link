import React, { Component } from 'react'
import axios from 'axios'
import CHeader from '../components/part/Header'
import CStatistical from '../components/part/Statistical'
import CUsefulness from '../components/part/Usefulness'
import CFooter from '../components/part/Footer'
import CInputLink from '../components/part/InputLink'
import CRecent from '../components/part/Recent'
import CAction from '../components/part/Action'

import CTest from '../components/part/NotFound'
class Home extends Component {
    constructor(props) {
        super(props)

        this.takeCookie = this.takeCookie.bind(this)
    }

    takeCookie = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000'
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        this.takeCookie()
        return (
            <div>
                <CHeader />
                <div className="container">
                    <CAction/ >
                    {/* <div className="main">
                        <CInputLink />
                    </div> */}
                    <CStatistical />
                    <CUsefulness />
                </div>
                <CFooter />
                {/* <div className="container">
                    <CTest />
                </div> */}
            </div >
        )
    }
}

export default Home