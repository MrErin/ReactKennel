import React, { Component } from "react"
import "./Owner.css"

export default class OwnerForm extends Component {
    state = {
        ownerName: "",
        ownerPhone: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewOwner = evt => {
        evt.preventDefault()
        const owner = {
            ownerName: this.state.ownerName,
            ownerPhone: this.state.ownerPhone
        }
        this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input type="text" required="true" className="form-control" onChange={this.handleFieldChange} id="ownerName" placeholder="Owner Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerPhone">Owner Phone</label>
                        <input type="text" required="true" className="form-control" onChange={this.handleFieldChange} id="ownerPhone" placeholder="Owner Phone" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}
