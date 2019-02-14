import React, { Component } from 'react'
import PropTypes from 'prop-types'



class TVShow extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func,
    }
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