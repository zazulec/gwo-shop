import React, { useState } from 'react';
import '../scss/pages/loginPage.scss';

import { connect } from 'react-redux'
import { InputComponent } from '../component/inputComponent/InputComponent';

export const LoginPage = () => {
    const [login, setLogin] = useState("login")
    const [password, setPassword] = useState("password")
    return (
        <div className="loginWrapper">
            <h1>Aby przejść do sklepu musisz się zalogować.</h1>
            <InputComponent
                type="text"
                labelText="login"
                value={login}
                readOnly={true}
            />
            <InputComponent
                type="password"
                labelText="pasword"
                value={password}
                readOnly={true}
            />
            <button>Login</button>
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
