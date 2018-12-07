import React, { Component } from 'react'
import './MyCss.css'
import Nav from './Nav'

class ManagePage extends Component {
    render = () => {
        return (
            <div>
                <header>
                    <Nav />
                </header>

                <div className="container-2">
                    <div className="box-3">
                        <h3>SHOWS</h3>
                        <span>
                            <button>Titans</button><button className="delete-button">-</button><br /></span>
                        <span>
                            <button>Doom Patrol</button><button className="delete-button">-</button><br /></span>
                    </div>
                    <div className="box-4">
                        <h3>New/Edit Show</h3>
                        <form>
                            Name:<input type="text" name="name" />
                            Rating:<input type="text" name="rating" />
                            Image Url:<input type="text" name="image-url" />
                            <button type="submit">Create/Update</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default ManagePage