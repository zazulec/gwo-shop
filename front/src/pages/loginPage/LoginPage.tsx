import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Action, Dispatch } from 'redux';
import signUp from '../../actions/authActions/authActions';
import { CustomButton } from '../../component/customButton/CustomButton';
import { CustomLoginInput } from '../../component/customLoginInput/CustomLoginInput';
import '../../scss/pages/loginPage/loginPage.scss';
import { toast } from "react-toastify";
import run from '../../assets/run.svg';
import { LoginPageProps } from '../../helpers/interfaces/interfaces';



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
            <img className="loginWrapper_runGuy" src={run} alt="runGuy" />
            <h1>Aby przejść do sklepu musisz się zalogować.</h1>
            <CustomLoginInput
                type="text"
                labelText="login"
                value={login}
                readOnly={true}
            />
            <CustomLoginInput
                type="password"
                labelText="pasword"
                value={password}
                readOnly={true}
            />
            <Link to="/mainPage" className="loginWrapper_buttonLink" style={{ textDecoration: 'none' }}>
                <CustomButton
                    title="Zaloguj"
                    onClick={() => handleLoginButtonClick()}
                />
            </Link>
            <div className="loginWrapper_attribute"> Icons made by <a href="https://www.flaticon.com/authors/google" title="Google"> Google </a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
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

