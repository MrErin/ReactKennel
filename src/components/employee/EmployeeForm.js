import React, { Component } from "react"
import "./Employee.css"

export default class EmployeeForm extends Component {
    state = {
        employeeName: "",
        employeePhone: "",
        employeeLocationId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = evt => {
        evt.preventDefault()
        if (this.state.employeeLocationId === ""){
            window.alert("Please select an assigned location")
        } else {
            const employee = {
                employeeName: this.state.employeeName,
                employeePhone: this.state.employeePhone,
                employeeLocationId: this.props.locations.find(l => l.name === this.state.employeeLocationId).id
            }
            this.props.addEmployee(employee).then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return(
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee Name</label>
                        <input type="text" required="true" className="form-control" onChange={this.handleFieldChange} id="employeeName" placeholder="Employee Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employeePhone">Employee Phone</label>
                        <input type ="text" required="true" className="form-control" onChange={this.handleFieldChange} id="employeePhone" placeholder="Employee Phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employeeLocationId">Assign to location</label>
                        <select defaultValue="" name="employeeLocationId" id="employeeLocationId" onChange={this.handleFieldChange}><option value="">Select a location</option>
                        {
                            this.props.locations.map(l => <option key={l.id} id={l.id}>{l.name}</option>)
                        }
                        </select>
                        </div>
                        <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                    </form>
            </React.Fragment>
        )
    }
}