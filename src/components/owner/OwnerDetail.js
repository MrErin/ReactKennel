import React, { Component } from "react"
import "./Owner.css"
import person from "./person.png"

export default class OwnerDetail extends Component {
    render() {
        const owner = this.props.owners.find(o => o.id === parseInt(this.props.match.params.ownerId)) || {}

        return(
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={person} className="icon--person" />
                            {owner.name}
                            {owner.phone}
                        </h4>
                        <a href="#" onClick={() => this.props.dismissOwner(owner.id).then(() => this.props.history.push("/employees"))} className="card-link">Dismiss Owner</a>
                    </div>
                </div>
            </section>
        )
    }
}