import React, { Component } from "react"

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = e => {
        e.preventDefault()

        localStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">Email Address</label>
                <input onChange={this.handleFieldChange}
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword">Password</label>
                <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" />
                <button type="submit">Sign in</button>
            </form>
        )
    }
}