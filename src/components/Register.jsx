import { useState } from "react";

//The Register component captures the form submission and uses the setView function to change the view to 'web'.
export function Register({ setView }) {

    //the enter function prevents the default behavior of the event and changes the view to 'web' using the setView function.
    const ingresar = (e) => {
        e.preventDefault();
        setView('web');
    }
    return (
        <>
            <div className="card border bg-dark">
                <h2 className="text-danger">Registro</h2>
                <form className="card-body p-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label text-danger">Nombre</label>
                        <input type="text" className="form-control" id="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-danger">Email</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-danger">Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-danger text-dark" onClick={ingresar}>Registrar</button>
                    </div>
                </form>
            </div>
            <br />
        </>
    );
}