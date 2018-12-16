import React, { Component } from 'react'


class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button onClick={this.props.deleteHandler} className="delete-button">-</button>)
        }
    }
    render = () => {
        return (
            
                <span><button onClick={this.props.selectHandler}>{this.props.name}</button>
                {this.renderDelete()}
            </span>
        )
    }
}

export default TVShow