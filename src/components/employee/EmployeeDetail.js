import React, { Component } from "react"
import "./Employee.css"
import person from "./person.png"

export default class EmployeeDetail extends Component {
    render(){
        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={person} className="icon--person" />
                            {employee.employeeName}
                        </h4>
                        <p>{employee.employeePhone}</p>
                        <a href="#" onClick={() => this.props.fireEmployee(employee.id).then(() => this.props.history.push("/employees"))} className="card-link">Fire Employee</a>
                    </div>
                </div>
            </section>
        )
    }
}