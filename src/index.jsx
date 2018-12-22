import React from 'react';
import { render } from 'react-dom';
import './index.css';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { username, password } = this.state;
        return (
            <div class="container">
                <h1 class="form-heading">login Form</h1>
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            <p>Please enter your email and password</p>
                        </div>
                        <form id="Login" onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <input type="text" class="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Email Address" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
}

render(<Index />, document.getElementById('root'));
