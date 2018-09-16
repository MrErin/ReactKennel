import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import AnimalList from "./animal/AnimalList"
import LocationList from "./location/LocationList"
import EmployeeList from "./employee/EmployeeList"
import OwnerList from "./owner/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"
import EmployeeDetail from "./employee/EmployeeDetail"
import OwnerDetail from "./owner/OwnerDetail"

export default class ApplicationViews extends Component {
    state = {
            locations: [],
            animals: [],
            owners: [],
            employees: []
    }

    deleteAnimal = id => {
        AnimalManager.removeAndList(id).then(animals => this.setState({
            animals:animals
        }))

    }

    fireEmployee = id => {
        EmployeeManager.removeAndList(id).then(employees => this.setState({
            employees: employees
        }))

    }

    dismissOwner = id => {
        OwnerManager.removeAndList(id).then(owners => this.setState({
            owners: owners
        }))

    }

    removeBuilding = id => {
        LocationManager.removeAndList(id).then(locations => this.setState({
            locations: locations
        }))
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })

    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList removeBuilding={this.removeBuilding} locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList dismissOwner={this.dismissOwner} owners={this.state.owners} />
                }}/>
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal = {this.deleteAnimal} animals={this.state.animals} />
                }}/>
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props} removeBuilding = {this.removeBuilding} locations={this.state.locations} />
                }}/>
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee = {this.fireEmployee} employees={this.state.employees} />
                }}/>
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} dismissOwner = {this.dismissOwner} owners={this.state.owners} />
                }}/>
            </React.Fragment>
        )
    }
}
