import React from 'react'
class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="loginForm">
                    <h2 className="mb-3">Login</h2>
                    <div className="formEle">
                        <input type="text" name="username"  placeholder="Enter Username" />
                    </div>
                    <div className="formEle">
                        <input type="password" name="password"  placeholder="Enter Password" />
                    </div>
                    <div className="formEle">
                        <button className="btn btn-primary mt-3">Login</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login