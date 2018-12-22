import React from 'react';
import { render } from 'react-dom';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="container">
                <h1 className="form-heading">login Form</h1>
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <p>Please enter your email and password</p>
                        </div>
                        <form id="Login" onSubmit={this.login}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
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

    login(e) {
        e.preventDefault();
        console.log(this.state);
    }
}

render(<Index />, document.getElementById('root'));
