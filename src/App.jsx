import { useState } from 'react';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Web } from './components/web';
import { BackButon } from './components/back_Buton';
import './App.css';

export function App() {

  /*ALL of this code creates a component that displays different views based on the value of view and provides the ability to change
  between the "login" and "register" views. Also, when view is "web", a button to return to login is shown.*/
  const [view, setView] = useState("login");

  function changeView(ev) {
    view === "login" ? setView("register") : setView("login");
  }

  function renderView(ev) {
    switch (view) {
      case "register":
        return <Register setView={setView} />;
        break;
      case "login":
        return <Login setView={setView} />;
        break;
      case 'web':
        return <Web setView={setView} />;
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div>
        {renderView()}
        {view !== 'web' && (
          <button onClick={changeView} className='btn btn-danger custom-btn'>{
            view === 'login' ? 'CAMBIAR A REGISTER' : 'CAMBIAR A LOGIN'
          }</button>
        )}
        {view === 'web' && <BackButon setView={setView} view={view} />}
      </div>
    </>
  );
}