'use client';

import { useState } from "react";

interface FormData {
    email: string;
    password: string;
}

function Login() {

    const credentials = { email: "contato@onovoprogramador.com", password: "123"};

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });

    function verifyLogin() {
        if(credentials.email === formData.email && credentials.password === formData.password) {
            alert('Login efetuado com sucesso!');
        } else {
            alert('Usuario e/ou senha incorreto(s)!');
        }
    };

    return (
        <>
            <input 
                type="email" 
                placeholder="Digite seu e-mail..." 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                value={formData.email}
            />

            <input 
                type="password" 
                name="" 
                id="" 
                placeholder="Digite sua senha..." 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                value={formData.password}
            />
            <br/><br/>

            <button onClick={() => verifyLogin()}>ENTRAR NO SISTEMA</button>
        </>
    );
}

export default Login;