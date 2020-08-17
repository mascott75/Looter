import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import {FormBtn } from "../components/Form";
import React, { useState, useEffect } from "react";
import HeroBody from "../components/heroBody";
import { useHistory } from "react-router-dom";
import PlayButton from "../components/play_button/index"


function Login() {
    const [formObject, setFormObject] = useState({})
    const history = useHistory();

    useEffect(() => {
        console.log("we got to here")
        API.checkUserLogged()
            .then((user) => {
                console.log(user)
                if (user.data.id)
                    history.push("/home");
                else {
                    console.log("we didnt make it doe.")
                }
            })
    }, [])
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("you got here - login")
        if (formObject.userName && formObject.password) {
            API.loginUser({
                userName: formObject.userName,
                password: formObject.password
            },
            console.log("you logged in"))
                .then(function () { history.push("/home") })
                .catch(err => console.log(err));
        }
    };
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    return (
        <Container fluid>
            <PlayButton></PlayButton>
            <HeroBody />
            <section className="section wrapper">
                <div className="container">
                    <h1 className="title">
                        Login Form
                </h1>
                    <p className="subtitle">
                        Enter email and password below to access <strong>DinDer</strong>.
                </p>
                    <form>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input onChange={handleInputChange} name="userName" id="email_input" className="input" type="userName" placeholder="Username">
                                </input>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input onChange={handleInputChange} name="password" id="password-Input" className="input" type="password" placeholder="Password">
                                </input>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <FormBtn id="form_login" onClick={handleFormSubmit}><Link to="/home">
                                    Login
                                    </Link>
                                </FormBtn>
                            </p>
                        </div>
                    </form>
                    <p>Don't have an account? Sign up <Link to = "/signup">HERE </Link></p>
                </div>
            </section>
            <div></div>
        </Container>


    )
}

export default Login;