import React, { Component } from 'react'
import './MyCss.css'
import Nav from './Nav'
import TVShow from './TVShow'

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
                        <TVShow name="Titans" allowDelete={true} />
                        <TVShow name="Doom Patrol" allowDelete={true} />
                        
                    </div>
                    <div className="box-4">
                        <h3>New/Edit Show</h3>
                        <form>
                            <div>Name:<input type="text" name="name" /></div>
                            <div>Rating:<input type="text" name="rating" /></div>
                            <div>Image Url:<input type="text" name="image-url" /></div>
                            <button type="submit">Create/Update</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default ManagePage