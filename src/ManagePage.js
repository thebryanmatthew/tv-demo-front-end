import React, { Component } from 'react'
import './MyCss.css'
import Nav from './Nav'
import TVShow from './TVShow'

class ManagePage extends Component {
    state = {
        nameInProgress: "",
        ratingInProgress: "",
        imgInProgress: "",
        show: {}

    }



    tvShowSelected = () => {
        console.log("tvShowSelected")
        this.setState({
            nameInProgress: this.state.show.name,
            ratingInProgress: this.state.show.rating,
            imgInProgress: this.state.show.img,

        })
    }
    tvShowDeleted = () => {
        console.log("tvShowDeleted")
        this.setState({
            show: {
                name: "",
                rating: "",
                img: "",
            },
            
        })
    }

    saveShow = (e) => {
        e.preventDefault()
        console.log("saveShow")
        console.log(this.state)
        this.setState({
            show: {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                img: this.state.imgInProgress,
            }
            
        })
        this.setState({
            nameInProgress: "",
            ratingInProgress:"",
            imgInProgress: "",

        })
        
    }

    renderShows = () => {
        return (
            <TVShow name={this.state.show.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
        )
    }


    render = () => {
        console.log(this.state)
        return (
            <div>
                <header>
                    <Nav />
                </header>

                <div className="container-2">
                    <div className="box-3">
                        <h3>SHOWS</h3>
                        {this.renderShows()}
                    </div>
                    <div className="box-4">
                        <h3>New/Edit Show</h3>
                        <form>
                            <div>Name:<input type="text" name="name" value={this.state.nameInProgress} onChange={
                                (event) => { 
                                    this.setState({ nameInProgress: event.target.value }) 
                                    }
                                    } />
                                </div>
                            <div>Rating:<input type="text" name="rating" value={this.state.ratingInProgress} onChange={(event) => { this.setState({ ratingInProgress: event.target.value }) }} /></div>
                            <div>Image Url:<input type="text" name="image-url" value={this.state.imgInProgress} onChange={(event) => { this.setState({ imgInProgress: event.target.value }) }} /></div>
                            <button type="submit" onClick={this.saveShow}>Create/Update</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default ManagePage