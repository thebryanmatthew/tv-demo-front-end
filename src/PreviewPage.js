import React, { Component } from 'react'
import './MyCss.css'
import Nav from './Nav'
import TVShow from './TVShow'

class PreviewPage extends Component {
    render = () => {
        return (
            <div>
                <div>
                    <header>
                        <Nav />
                    </header>

                </div>
                <div className="container-2">
                    <div className="box-3">
                        <h3>SHOWS</h3>
                        <button onClick="clickedShowSelection()" type="button">Titans</button><br />
                        <button onClick="clickedShowSelection()" type="button">Doom Patrol</button>
                    </div>
                    <div className="box-4">
                        <div className="show-name-rating">
                            <h4>TITANS</h4>
                            <h4>3/5</h4>

                        </div>
                        <div className="show-image">
                            <img src="https://pbs.twimg.com/media/DoHceqzWsAAdwJf.jpg" height="570px" width="386x" />
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default PreviewPage



