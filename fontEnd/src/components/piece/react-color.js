import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            background: '#fff',
        };
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.props.setColor(color.hex)
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.handleClick} className="btn btn-success">Chọn màu</button>
                {this.state.displayColorPicker
                    ? <SketchPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />
                    : null}
            </div>
        );
    }
}

export default ColorPicker

