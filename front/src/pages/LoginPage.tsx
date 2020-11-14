import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Action, Dispatch } from 'redux';
import signUp from '../actions/authActions/authActions';
import { CustomButton } from '../component/customButton/CustomButton';
import { InputComponent } from '../component/inputComponent/InputComponent';
import '../scss/pages/loginPage.scss';
import { toast } from "react-toastify";

interface LoginPageProps {
    signUp: (login: string, password: string) => Action,
}

const LoginPage: FC<LoginPageProps> = ({ signUp }) => {
    const [login] = useState("login")
    const [password] = useState("password")

    const handleLoginButtonClick = () => {
        return (
            signUp(login, password),
            toast.success("Zalogowano poprawnie")
        )
    }

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
            <Link to="/mainPage" style={{ textDecoration: 'none' }}>
                <CustomButton
                    title="Zaloguj"
                    onClick={() => handleLoginButtonClick()}
                />
            </Link>
        </div >
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signUp: (login: string, password: string) => dispatch(signUp(login, password)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

