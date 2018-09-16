import React, { Component } from 'react'
import "./Employee.css"
import EmployeeCard from "./EmployeeCard"
import AnimalCard from "../animal/AnimalCard"

export default class EmployeeList extends Component {
    render() {
        return (
            <article>

                <div className="employeeButton">
                    <button type="button" className="btn btn-success" onClick={() => {
                        this.props.history.push("/employees/new")
                    }}>Hire Employee</button>
                </div>
                <section className="employees">
                {
                    this.props.employees.map(employee => 
                        <EmployeeCard key={employee.id} employee={employee}{...this.props}/>
                        <h6 className="card-subtitle mb-2 text-muted">Caretaker For:</h6>
                        <div className="animals--caretaker">
                            {this.props.animals.filter(a => a.employeeId === employee.id).map(a => <AnimalCard key={a.id} animal = {a}{...this.props}/>)
                        }
                        </div>

                    )
                }
                </section>
            </article>
        )
    }
}