import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="box-1">
                        <NavLink exact to='/' activeClassName='active'>
                            <h2>MANAGE</h2>
                        </NavLink>
                    </div>
                    <div className="box-2">
                        <NavLink to='/previewpage' activeClassName='active'>
                            <h2>PREVIEW</h2>
                        </NavLink>

                    </div>
                </nav>

            </div>

        )
    }
}



export default Nav