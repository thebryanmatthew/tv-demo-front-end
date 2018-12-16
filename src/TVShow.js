import React, { Component } from 'react'


class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button className="delete-button">-</button>)
        }
    }
    render() {
        return (
            
                <span><button>{this.props.name}</button>
                {this.renderDelete()}
                </span>
        )
    }
}

export default TVShow