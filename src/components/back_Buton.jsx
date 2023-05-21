/*The BackButton function is a function component that accepts two props: setView and view.
setView is a function to change the view and view represents the current view.*/
export function BackButon({ setView, view }) {

    //the exit function displays a message on the console and changes the view to the login page using the setView function.
    const salir = () => {
        console.log("Sesión cerrada");
        setView('login');
    };

    return (
        <>
            {view === 'web' && (
                <div>
                    <button type="button" className="btn btn-dark" onClick={salir}>
                        Salir
                    </button>
                </div>
            )}
        </>
    )
}