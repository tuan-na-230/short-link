import React, { Component } from 'react'
import './usefulness.scss'
import img1 from '../../../images/usefulness-1.png'
import img3 from '../../../images/usefulness-2.jpg'
import img2 from '../../../images/usefulness-3.jpg'


class Usefulness extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="usefulness">
                <h1 className="title-usefulness">CÔNG DỤNG</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img">
                            <img src={img1}></img>
                        </div>
                        <div className="content">
                            <h1>Link đơn giản hơn</h1>
                            <p>Với 1 đường link đơn giản hơn, bạn có thể dễ dàng gửi cho bạn bè cũng như thêm vào cách văn bản 1 cách khoa học hơn.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <img src={img2}></img>
                        </div>
                        <div className="content">
                            <h1>Link đơn giản hơn</h1>
                            <p>Mã QR code giúp khách hàng của bạn dễ dàng tiếp cận tới trang web mà bạn mong muốn</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <img src={img3}></img>
                        </div>
                        <div className="content">
                            <h1>Link đơn giản hơn</h1>
                            <p>Và còn rất nhiều ứng dụng hay ho mà bạn có thể thỏa sức khám phá với Pi.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Usefulness