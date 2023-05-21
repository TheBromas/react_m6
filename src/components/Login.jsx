import { useState } from "react";

/*The Login function is a function component that accepts a setView prop.
The setView prop is a function used to change the view of the web.*/
export function Login({ setView }) {

    /* use the username and password states together with the setUsername and setPassword functions
    to handle username and password values in a component.*/
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /*these name and pass functions are used as event handlers to update the username and password states*/
    const name = (e) => {
        setUsername(e.target.value);
    };
    const pass = (e) => {
        setPassword(e.target.value);
    };

    /*The verification function is used as an event handler to verify the entered login credentials.
    If the credentials are correct, the view is switched to the web page; otherwise an error alert is displayed.*/
    const verification = (e) => {
        e.preventDefault();
        if (username === 'nashe' && password === '123') {
            console.log('Inicio de sesión exitoso');
            setView('web');
        } else {
            alert('Incorrecto');
        }
    };
    return (
        <>
            <div className="card border bg-dark">
                <h2 className="text-danger">Login</h2>
                <form className="card-body p-3" onSubmit={verification}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-danger">Email</label>
                        <input type="text" className="form-control" id="email" value={username} onChange={name} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-danger">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={pass} required />
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-danger text-dark">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
            <br />
        </>
    );
}