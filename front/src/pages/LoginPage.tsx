import React from 'react';
import '../scss/pages/loginPage.scss';

import { connect } from 'react-redux'
import { InputComponent } from '../component/inputComponent/InputComponent';

export const LoginPage = () => {

    return (
        <div className="loginWrapper">
            <h1>Aby przejść do sklepu musisz się zalogować.</h1>
            <InputComponent
                type="text"
                labelText="login"
                value="login"
            />
            <InputComponent
                type="password"
                labelText="pasword"
                value="password"
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
