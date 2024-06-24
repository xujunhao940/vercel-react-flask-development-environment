import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

function App() {
    const [content, setContent] = useState("loading...");
    useEffect(() => {
        fetch("/api/helloworld/").then(res => res.text()).then(res => setContent(res))
    }, [])
    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Content from flask : {content}</p>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>);
}

export default App;
