import React from 'react'
import './login.css'
//import { MdEmail, MdLock } from "react-icons/md";

function Login() {
    return (
        <div className="login">
            <div className="login">


                <div className="login-right">
                    <h1>Login</h1>

                    <div className="loginInputEmail">

                        <input type="text" placeholder="Digite seu e-mail" />

                    </div>

                    <div className="loginInputPassword">

                        <input type="password" placeholder="Digite sua senha"
                        />

                    </div>

                    <div className="ButtonEntrar">
                        <button type="submit">
                            Entrar
                        </button>
                    </div>

                    <div className="ButtonCadastrar">


                        <button type="submit" >
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login //exportanto a funcao para puxar nem app.js