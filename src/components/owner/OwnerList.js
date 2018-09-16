import React, { Component } from "react"
import person from "./person.png"
import { Link } from "react-router-dom"
import "./Owner.css"

export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={person} className="icon--person" />
                                {owner.name}
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                <a href="#" onClick={() => this.props.dismissOwner(owner.id)} className="card-link">Dismiss Owner</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}