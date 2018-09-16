import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import AnimalManager from "../modules/AnimalManager"
import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetail"
import AnimalForm from "./animal/AnimalForm"
import LocationManager from "../modules/LocationManager"
import LocationList from "./location/LocationList"
import LocationDetail from "./location/LocationDetail"
import EmployeeManager from "../modules/EmployeeManager"
import EmployeeList from "./employee/EmployeeList"
import EmployeeDetail from "./employee/EmployeeDetail"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerManager from "../modules/OwnerManager"
import OwnerList from "./owner/OwnerList"
import OwnerDetail from "./owner/OwnerDetail"
import OwnerForm from "./owner/OwnerForm"

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
    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))

    fireEmployee = id => {
        EmployeeManager.removeAndList(id).then(employees => this.setState({
            employees: employees
        }))

    }
    addEmployee = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => this.setState({
            employees: employees
        }))

    dismissOwner = id => {
        OwnerManager.removeAndList(id).then(owners => this.setState({
            owners: owners
        }))

    }

    addOwner = owner => OwnerManager.post(owner)
        .then(() => OwnerManager.getAll())
        .then(owners => this.setState({
            owners: owners
    }))

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
                    return <LocationList 
                                removeBuilding={this.removeBuilding} locations={this.state.locations} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props}
                                removeBuilding = {this.removeBuilding} locations={this.state.locations} />
                }}/>
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                                deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} 
                                deleteAnimal = {this.deleteAnimal} animals={this.state.animals} />
                }}/>
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                                addAnimal={this.addAnimal}
                                employees={this.state.employees} />
                }}/>
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props}
                                fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} 
                                fireEmployee = {this.fireEmployee} employees={this.state.employees} />
                }}/>
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                addEmployee={this.addEmployee}
                                locations={this.state.locations} />
                }}/>
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props}
                                dismissOwner={this.dismissOwner} owners={this.state.owners} />
                }}/>
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} 
                                dismissOwner = {this.dismissOwner} owners={this.state.owners} />
                }}/>
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                                addOwner={this.addOwner}/>

                }}/>
            </React.Fragment>
        )
    }
}
