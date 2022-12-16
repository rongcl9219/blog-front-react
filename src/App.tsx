import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p className="read-the-docs">
        Click on the Vite and React logos to learn more
                <div className="card">
                    <button type="button" onClick={() => setCount(() => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
            </p>
        </div>
    );
};

export default App;
