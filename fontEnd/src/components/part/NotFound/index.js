import React, { Component } from 'react'

import './not-found.scss'
import dinosaur from '../../../images/dinosaur.png'

class NotFound extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="not-found">
                    <img src={dinosaur} alt="dinosaur-not-found" className="not-found-img"></img>
                    <div className="not-found-info">
                        <div className="not-found-title">
                            <h1>Có sự nhầm lẫn ở đây!</h1>
                        </div>
                        <div className="not-found-content">
                            <p>Đây là lỗi 404, dường bạn đã click vào 1 đường link không đúng. Hãy kiểm tra lại nó, hoặc bạn có thể tìm thấy sự giúp đỡ tại đây</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound