import React, { Component } from "react"
import "./Location.css"
import building from "./building.png"

export default class LocationDetail extends Component {
    render(){
        const location = this.props.locations.find(l => l.id === parseInt(this.props.match.params.locationId)) || {}

        return(
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={building} className="icon--building" />
                            {location.name}
                        </h4>
                        <a href="#" onClick={() => this.props.removeBuilding(location.id).then(() => this.props.history.push("/locations:"))} className="card-link">Remove Building</a>
                    </div>
                </div>
            </section>
        )
    }
}