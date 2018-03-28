import React, { Component } from 'react';
import axios from 'axios';

class LoginView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            isAuthenticated: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name] : value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const { username, password } = this.state;
        const body = {
            username: username,
            password: password
        }

        axios.post('https://damp-fortress-54104.herokuapp.com/login', body).then(
            response => {
                this.setState({
                    isAuthenticated: true
                });
                this.getUserInfo(response.data.token);
            }
        ).catch( error => {
            if (error.response.status === 401) {
                this.setState({        
                    errorMessage: error.response.status + "Invalid Credentials!"
                });
            }
        });
    }

    getUserInfo(token) {
        const headers = { Authorization: token };
        axios.get('https://damp-fortress-54104.herokuapp.com/user_info', { headers });
    }

    render() {
        return (
            <div>
                {
                    this.state.isAuthenticated ? <div><span>Welcome!</span></div> : 
                
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input name="username" value={this.state.username} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    <button type="submit">Login</button>
                    {
                        this.state.errorMessage !== '' &&
                        <span style={{color: 'red' }}><p>{this.state.errorMessage}</p></span>
                    }
                </form>
                }
            </div>
        )
    }
}

export default LoginView;