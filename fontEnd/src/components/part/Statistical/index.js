import React, { Component } from 'react'
import './statistical.scss'
import axios from 'axios'

class Statistical extends Component {
    constructor(props) {
        super(props)

        this.state = {
            smaller: 1,
            download: 0,
        }

        this.callApiCountSmaller = this.callApiCountSmaller.bind(this)
    }

    componentDidMount() {
        this.callApiCountSmaller()
    }

    callApiCountSmaller = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/statistical',
            params: {
                'count': 'true'
            }
        })
            .then((res) => {
                const smaller = res.data
                this.setState({
                    smaller: smaller,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="community">
                <h1 className="community-title">CỘNG ĐỒNG</h1>
                <h1 className="community-sub-title">Cộng đồng xây dựng trang web trở nên mạnh mẽ hơn.</h1>
                {/* <div className="statistical">
                    <div className="statistical-collapse">
                        <div className="title">
                            <img src={smallImg}></img>
                            <p className="number-of-statistical">{this.state.smaller}</p>
                        </div>
                        <p>Lượt thu gọn</p>
                    </div>
                    <div className="statistical-collapse">
                        <div className="title">
                            <img src={downloadImg}></img>
                            <p className="number-of-statistical">{this.state.download}</p>
                        </div>
                        <p>Lượt tải về</p>
                    </div>
                </div> */}
                <div className="statistical">
                    <div className="statistical-item">
                        <i className="fas fa-check"></i>
                        <p>{this.state.smaller} Lượt truy cập</p>
                    </div>
                    <div className="statistical-item">
                        <i className="fas fa-check"></i>
                        <p>{this.state.smaller} Lượt thu gọn</p>
                    </div>
                    <div className="statistical-item">
                        <i className="fas fa-check"></i>
                        <p>{this.state.smaller} Lượt tải QR code</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistical