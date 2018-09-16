import React, { Component } from 'react'
import person from "./person.png"
import "./Employee.css"
import { Link } from "react-router-dom"

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee => 
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={person} className="icon--person" />
                                {employee.name}
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <a href="#" onClick={() => this.props.fireEmployee(employee.id)} className="card-link">Fire Employee</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}