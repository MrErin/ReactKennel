import React, { Component } from 'react'
import building from "./building.png"
import "./Location.css"
import { Link } from "react-router-dom"

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={building} className="icon--building" />
                                {location.name}
                                <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                                <a href="#" onClick={() => this.props.removeBuilding(location.id)} className="card-link">Remove Building</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}